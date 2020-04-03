import firebase from 'firebase/app'
import Message from 'vue-m-message';

export default{
    state: {
        sending: false,
        loadingFiles: false,
    },
    mutations: {
        setSending(state, payload){
            state.sending = payload
        },
        setLoadingFiles(state, payload){
            state.loadingFiles = payload
        }
    },
    actions: {
        async sendFile({commit}, { file, userID }){
            commit('setSending', true);
            try{
                await firebase.storage().ref('userAvatars/'+userID).put(file);
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
        }
    },
    getters: {
        isSending(state) {
            return state.sending;
        },
        isLoadingFiles(state){
            return state.loadingFiles;
        }
    }
}