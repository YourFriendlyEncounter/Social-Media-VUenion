import firebase from 'firebase/app'

import Post from './post_help'
import Message from 'vue-m-message'

export default {
    state: {
        posts: []
    },
    mutations: {
        loadPosts (state, payload) {
            state.posts = payload
        },
        newPost (state, payload) {
            state.posts.push(payload)
        }
    },
    actions: {
        async loadPosts ({commit}){
            commit('clearError')
            commit('setLoading', true)
            try{
                const post = await firebase.database().ref('posts').once('value')
                const posts = post.val()
                const postsArray = []
                Object.keys(posts).forEach(key => {
                    const p = posts[key]
                    postsArray.push(
                        new Post(
                            p.text,
                            p.dateTimeAdded,
                            p.images,
                            p.edited,
                            p.likes,
                            p.dislikes,
                            p.user,
                            key
                        )
                    )
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
                    payload.likes,
                    payload.dislikes,
                    getters.user.id
                )
                const post = await firebase.database()
                .ref('posts')
                .push(newPost)

                commit('newPost', {
                    ...newPost,
                    id: post.key
                })

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
    },
    getters: {
        getPosts(state) {
            return state.posts;
        }
    }
}