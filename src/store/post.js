import firebase from 'firebase/app'

import Message from 'vue-m-message'

export default {
    state: {
        posts: [],
        loadingLikes: false,
        loadingPosts: false,
        displayingNewCommentPanel: ""
    },
    mutations: {
        setPosts (state, payload) {
            state.posts = payload
        },
        newPost (state, payload) {
            state.posts.push(payload)
        },
        addPostToEndList(state, payload) {
            state.posts.unshift(payload)
        },
        removePost(state, payload) {
            state.posts = state.posts.filter(p => p.id != payload.id)
        },
        setLoadingLikes(state, payload) {
            state.loadingLikes = payload;
        },
        clearPost(state) {
            state.posts = []
        },
        sortPosts(state) {
            state.posts = state.posts.sort((p, p2) => new Date(p.dateTimeAdded) - new Date(p2.dateTimeAdded))
        },
        updatePost(state, payload) {
            for(let i = 0; i < state.posts.length; i++){
                if(state.posts[i].id === payload.id) {
                    state.posts[i] = payload
                    return
                }
            }
        },
        setDisplayingNewCommentPanel(state, payload) {
            if(state.displayingNewCommentPanel == payload)
                state.displayingNewCommentPanel = "";
            else
                state.displayingNewCommentPanel = payload;
        }
    },
    actions: {
        async loadPosts ({commit, getters}, {field, page, itemsPerPage}){
            commit('clearError')
            commit('setLoading', true)
            try {
                const post = firebase.database().ref('allPosts/'+field)
                .limitToLast(page * itemsPerPage + itemsPerPage)
                post.on('child_added', (snap) => {
                    let p = snap.val()
                        
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
                    newPost.id = snap.key;

                    if(getters.getPosts.length > 0){
                        let samePost = getters.getPosts.find(p => p.id === snap.key);
                        if(samePost && samePost.showComment)
                            newPost.showComment = true;
                        else
                            newPost.showComment = false;
                    }
                    if(!getters.getPosts.find(p => p.id === snap.key)) {
                        if(page === 0)
                            commit('newPost', newPost)
                        else {
                            commit('addPostToEndList', newPost)
                            commit('sortPosts')
                        }
                    }
                })
                post.on('child_changed', (snap) => {
                    let p = snap.val()
                    
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
                    newPost.id = snap.key;
                    
                    commit('updatePost', newPost)
                })
                post.on('child_removed', (snap) => {
                    let post = snap.val()
                    post.id = snap.key
                    commit('removePost', post)
                    commit('sortPosts')
                })
                commit('setLoading', false)
            }
            catch(error) {
                commit('setLoading', false)
                commit('setError', error.message)
                Message.error(error.message);
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
                .ref('allPosts/'+payload.field)
                .push(newPost)

                if(payload.type == "comment")
                    Message.success("Комментарий добавлен.");
                else if(payload.type == "post")
                    Message.success("Пост добавлен.");
                
                commit('setDisplayingNewCommentPanel', "")

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
                .ref('allPosts/'+payload.field+"/"+payload.id)
                .remove();
                
                for(let i = 0; i < payload.images; i++){
                    try{
                        await firebase.storage()
                        .ref('posts/'+payload.id+"/"+i)
                        .delete();
                    }
                    catch(error){
                        Message.error(error.message)
                        break;
                    }
                }
                let postTargets = getters.getPosts.filter(p => p.target === payload.id);
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
                .ref('allPosts/'+ post.field + "/" +post.id+"/liked/")
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
                .ref('allPosts/'+ post.field + "/" +post.id+"/disliked/")
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
        getDisplayingNewCommentPanel(state) {
            return state.displayingNewCommentPanel
        }
    }
}