import firebase from 'firebase/app'

import Post from './post_help'
import Message from 'vue-m-message'

export default {
    state: {
        posts: [],
        loadingLikes: false,
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
            state.loading = payload
        }
    },
    actions: {
        async loadPosts ({commit}, {target}){
            commit('clearError')
            commit('setLoading', true)
            try{
                const post = await firebase.database().ref('posts').once('value')
                const posts = post.val()
                const postsArray = []
                Object.keys(posts).forEach(key => {
                    let p = posts[key]
                    if(!p.target)
                        p.target = "feed"
                    if(p.target === target || target === "feed"){
                        postsArray.push(
                            new Post(
                                p.text,
                                p.dateTimeAdded,
                                p.images,
                                p.edited,
                                p.liked,
                                p.disliked,
                                p.user,
                                p.type,
                                p.target,
                                key
                            )
                        )
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
                const newPost = new Post(
                    payload.text,
                    payload.dateTimeAdded,
                    payload.images,
                    payload.edited,
                    payload.liked,
                    payload.disliked,
                    getters.user.id,
                    payload.type,
                    payload.target,
                )
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
        async changeLikes({commit, getters}, {post, userID, isToRemove}){
            if(getters.isLoadingLikes)
                return;
            commit('setLoadingLikes', true)
            let newLiked = [];
            if(!post.liked)
                post.liked = [];
            if(!post.disliked)
                post.disliked = [];
            if(!post.images)
                post.images = [];
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
        async changeDislikes({commit, getters}, {post, userID, isToRemove}){
            if(getters.isLoadingLikes)
                return;
            commit('setLoadingLikes', true)
            let newDisliked = [];
            if(!post.liked)
                post.liked = [];
            if(!post.disliked)
                post.disliked = [];
            if(!post.images)
                post.images = [];
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
    }
}