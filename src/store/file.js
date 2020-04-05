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
        async sendFile({commit}, { link, file }){
            commit('setSending', true);
            try{
                await firebase.storage().ref(link).put(file);
                Message.success("Файл был успешно загружен!");
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
        async loadUserAvatarURLs({commit, getters}, {posts}) {
            commit('setLoadingFiles', true)
            for(let i = 0; i < posts.length; i++){
                if(!getters.getUserById(posts[i].user).image)
                    continue;
                try{
                    let URL = {
                        id: posts[i].user,
                        link: ""
                    }
                    await firebase.storage().ref().child('userAvatars/'+posts[i].user)
                    .getDownloadURL().then((url) => { 
                        URL.link = url 
                        if(!getters.getLoadedUserAvatarURLs.some(u => u.id === URL.id))
                            commit('pushUserAvatarImageURL', URL);
                    });
                }
                catch(error){
                    Message.error(error.message)
                }
            }
            commit('setLoadingFiles', false)
        },
        async loadPostImagesURLs({commit}, {posts}){
            commit('setLoadingFiles', true)
            try{
                for(let i = 0; i < posts.length; i++){
                    const post = posts[i];
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
            }
            catch(error){
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