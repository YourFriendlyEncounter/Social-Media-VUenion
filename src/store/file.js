import firebase from 'firebase/app'
import Message from 'vue-m-message';

export default{
    state: {
        sending: false,
        loadingFiles: false,
        userAvatarImageURLs: [],
        imageURLsLoaded: []
    },
    mutations: {
        setSending(state, payload) {
            state.sending = payload
        },
        setLoadingFiles(state, payload) {
            state.loadingFiles = payload
        },
        pushUserAvatarImageURL(state, payload) {
            state.userAvatarImageURLs.push(payload)
        },
        pushImageURL(state, payload){
            state.imageURLsLoaded.push(payload)
        }
    },
    actions: {
        async sendFile({commit}, { link, file, id }){
            commit('setSending', true);
            try{
                let image = await firebase.storage().ref(link);
                await image.put(file);
                let URL = {
                    id: id,
                    link: ""
                }
                image.getDownloadURL().then((url) => {
                    URL.link = url
                    commit('pushImageURL', URL)
                })
            }
            catch(error){
                Message.error(error.message);
                throw error
            }
            finally{
                commit('setSending', false);
            }
        },
        async getImage({commit}, { link }) {
            try{
                let url = await firebase.storage().ref().child(link)
                .getDownloadURL().then((url) => { return url });
                return url;
            }
            catch(error) {
                Message.error(error);
                throw error;
            }
            finally{
                commit('setSending', false);
            }
        },
        async loadUserAvatarURL({commit, getters}, {user}) {
            commit('setLoadingFiles', true)
            if(user.image){
                try{
                    let URL = {
                        id: user.id,
                        link: ""
                    }
                    await firebase.storage().ref().child('userAvatars/' + user.id)
                    .getDownloadURL().then((url) => { 
                        URL.link = url 
                        if(!getters.getLoadedUserAvatarURLs.some(u => u.id === URL.id))
                            commit('pushUserAvatarImageURL', URL);
                    });
                }
                catch(error){
                    commit('setLoadingFiles', false)
                    Message.error(error.message)
                    throw error
                }
            }
            commit('setLoadingFiles', false)
        },
        async loadPostImagesURLs({commit}, {post}){
            commit('setLoadingFiles', true)
            try{
                firebase.storage()
                .ref()
                .child('posts/' + post.id)
                .listAll()
                .then((res) => {
                    res.items.forEach((itemRef) => {
                        let URL = {
                            id: post.id,
                            link: ""
                        }
                        itemRef.getDownloadURL().then((url) => {
                            URL.link = url
                            commit('pushImageURL', URL)
                        })
                    });
                });
            }
            catch(error){
                Message.error(error.message)
                commit('setLoadingFiles', false)
                throw error
            }
            commit('setLoadingFiles', false)
        }
    },
    getters: {
        isSending(state) {
            return state.sending;
        },
        isLoadingFiles(state){
            return state.loadingFiles;
        },
        getLoadedUserAvatarURLs(state) {
            return state.userAvatarImageURLs;
        },
        getLoadedImagesURLs(state) {
            return state.imageURLsLoaded;
        }
    }
}