import firebase from 'firebase/app'
import Message from 'vue-m-message';

export default{
    state: {
        sending: false,
        loadingFiles: false,
        imageURLsLoaded: []
    },
    mutations: {
        setSending(state, payload) {
            state.sending = payload
        },
        setLoadingFiles(state, payload) {
            state.loadingFiles = payload
        },
        pushImageURL(state, payload){
            state.imageURLsLoaded.push(payload)
        },
    },
    actions: {
        async sendFile({commit}, { link, file, id, i }){
            let urlToReturn = "";
            commit('setSending', true);
            try{
                let image = firebase.storage().ref(link);
                await image.put(file);
                let URL = {
                    id: id,
                    number: i,
                    link: ""
                }
                await image.getDownloadURL().then((url) => {
                    URL.link = url
                    commit('pushImageURL', URL)
                    commit('setSending', false);
                    urlToReturn = url;
                })
                return urlToReturn;
            }
            catch(error){
                commit('setSending', false);
                Message.error(error.message);
                throw error
            }
        },
        async getImage({commit}, { link }) {
            try{
                let url = await firebase.storage().ref(link)
                .getDownloadURL()
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
        async loadPostImagesURLs({commit, getters}, {post}){
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
                            link: "",
                            number: itemRef.name
                        }
                        itemRef.getDownloadURL().then((url) => {
                            URL.link = url
                            if(!getters.getLoadedImagesURLs.some(u => u.link === URL.link))
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
        getLoadedImagesURLs(state) {
            return state.imageURLsLoaded;
        }
    }
}