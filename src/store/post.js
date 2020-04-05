import firebase from 'firebase/app'

import Message from 'vue-m-message'

export default {
    state: {
        posts: [],
        loadingLikes: false,
        loadingPosts: false
    },
    mutations: {
        loadPosts (state, payload) {
            state.posts = payload
        },
        newPost (state, payload) {
            state.posts.push(payload)
        },
        removePost(state, payload){
            state.posts = state.posts.filter(p => p.id != payload.id)
        },
        setLoadingLikes(state, payload){
            state.loadingLikes = payload
        },
        setLoading(state, payload){
            state.loadingPosts = payload
        }
    },
    actions: {
        async loadPosts ({commit}, {field}){
            commit('clearError')
            commit('setLoading', true)
            try{
                const post = await firebase.database().ref('posts').once('value')
                const posts = post.val()
                const postsArray = []
                Object.keys(posts).forEach(key => {
                    let p = posts[key]

                    if(!p.type)
                        p.type = "post"
                    if(!p.field)
                        p.field = "feed"
                    if(!p.target)
                        p.target = "feed"
                    if(!p.images)
                        p.images = false

                    if(p.field === field){
                        let newPost = {}
                        newPost.text = p.text;
                        newPost.dateTimeAdded = p.dateTimeAdded;
                        newPost.images = p.images;
                        newPost.edited = p.edited;
                        newPost.liked = p.liked;
                        newPost.disliked = p.disliked;
                        newPost.user = p.user;

                        newPost.type = p.type;
                        newPost.target = p.target;
                        newPost.field = p.field;

                        newPost.id = key;
                        newPost.showComment = false;

                        postsArray.push(newPost)
                    }
                })
                commit('loadPosts', postsArray)
                commit('setLoading', false)
            }
            catch(error){
                commit('setLoading', false)
                commit('setError', error.message)
                let message = "";
                switch(error.message){
                    case "The email address is already in use by another account.":
                        message = "Данный email-адрес уже используется другим аккаунтом."
                        break;
                    default: 
                        message = error.message; 
                        break;
                }
                Message.error(message);
                throw error
            }
        },
        async updatePosts ({commit, getters}, {field}){
            commit('clearError')
            commit('setLoading', true)
            try{
                const post = await firebase.database().ref('posts').once('value')
                const posts = post.val()
                const postsArray = []
                Object.keys(posts).forEach(key => {
                    let p = posts[key]

                    if(!p.type)
                        p.type = "post"
                    if(!p.field)
                        p.field = "feed"
                    if(!p.target)
                        p.target = ""
                    if(!p.images)
                        p.images = false
                        
                    if(p.field === field){
                        let newPost = {}
                        newPost.text = p.text;
                        newPost.dateTimeAdded = p.dateTimeAdded;
                        newPost.images = p.images;
                        newPost.edited = p.edited;
                        newPost.liked = p.liked;
                        newPost.disliked = p.disliked;
                        newPost.user = p.user;

                        newPost.target = p.target; 
                        newPost.type = p.type;
                        newPost.field = p.field;

                        newPost.id = key;
                        let samePost = getters.getPosts.filter(p => p.id == key)[0];
                        if(samePost == undefined)
                            newPost.showComment = false;
                        else
                            newPost.showComment = samePost.showComment;

                        postsArray.push(newPost)
                    }
                })
                commit('loadPosts', postsArray)
                commit('setLoading', false)
            }
            catch(error){
                commit('setLoading', false)
                commit('setError', error.message)
                let message = "";
                switch(error.message){
                    case "The email address is already in use by another account.":
                        message = "Данный email-адрес уже используется другим аккаунтом."
                        break;
                    default: 
                        message = error.message; 
                        break;
                }
                Message.error(message);
                throw error
            }
        },
        async newPost ({commit, getters}, payload){
            commit('clearError')
            commit('setLoading', true)
            try{
                const newPost = {}
                newPost.text = payload.text;
                newPost.dateTimeAdded = payload.dateTimeAdded;
                newPost.images = payload.images;
                newPost.edited = payload.edited;
                newPost.liked = payload.liked;
                newPost.disliked = payload.disliked;
                newPost.user = getters.user.id;

                newPost.type = payload.type;
                newPost.target = payload.target;
                newPost.field = payload.field;

                newPost.showComment = false;

                const post = await firebase.database()
                .ref('posts')
                .push(newPost)

                if(payload.type == "comment")
                    Message.success("Комментарий добавлен.");
                else if(payload.type == "post")
                    Message.success("Пост добавлен.");

                commit('newPost', {
                    ...newPost,
                    id: post.key
                })
                commit('setLoading', false)
                return post.key;
            }
            catch(error){
                commit('setLoading', false)
                commit('setError', error.message)
                Message.error(error.message);
                throw error
            }
        },
        async deletePost({commit, getters, dispatch}, payload){
            commit('clearError')
            commit('setLoading', true)
            try{
                await firebase.database()
                .ref('posts/'+payload.id)
                .remove();
                
                for(let i = 0; i < 10; i++){
                    try{
                        await firebase.storage()
                        .ref('posts/'+payload.id+"/"+i)
                        .delete();
                    }
                    catch(error){
                        break;
                    }
                }

                commit("removePost", payload);

                let postTargets = getters.getPosts.filter(p => p.target == payload.id);
                for(let i = 0; i < postTargets.length; i++){
                    dispatch('deletePost', postTargets[i])
                }
                
                if(payload.type == "comment")
                    Message.success("Комментарий удалён.");
                else if(payload.type == "post")
                    Message.success("Пост удалён.");
            }
            catch(error){
                Message.error(error.message)
            }
            commit('setLoading', false)
        },
        async changePost({commit}, payload){
            commit('setLoading', true)
            await firebase.database()
                .ref('posts/'+payload.id)
                .set(payload);
            commit('setLoading', false)
        },
        async changeLikes({commit}, {post, userID, isToRemove}){
            commit('setLoadingLikes', true)
            let newLiked = [];
            if(!post.liked)
                post.liked = [];
            if(!post.disliked)
                post.disliked = [];
            if(!post.images)
                post.images = false;
            if(!isToRemove){
                post.liked.push(userID)
                newLiked = post.liked;
            }
            else{
                newLiked = post.liked.filter(pl => pl != userID)
                post.liked = post.liked.filter(pl => pl != userID)
            }
            await firebase.database()
                .ref('posts/'+post.id+"/liked/")
                .set(newLiked);
            commit('setLoadingLikes', false)
        },
        async changeDislikes({commit}, {post, userID, isToRemove}){
            commit('setLoadingLikes', true)
            let newDisliked = [];
            if(!post.liked)
                post.liked = [];
            if(!post.disliked)
                post.disliked = [];
            if(!post.images)
                post.images = false;
            if(!isToRemove){
                post.disliked.push(userID)
                newDisliked = post.disliked;
            }
            else{
                newDisliked = post.disliked.filter(pl => pl != userID)
                post.disliked = post.disliked.filter(pl => pl != userID)
            }
            await firebase.database()
                .ref('posts/'+post.id+"/disliked/")
                .set(newDisliked);
            commit('setLoadingLikes', false)
        }
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
        isLoadingLikes(state){
            return state.loadingLikes
        },
        isLoadingPosts(state){
            return state.loadingPosts
        },
    }
}