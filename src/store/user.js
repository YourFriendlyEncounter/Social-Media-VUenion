import firebase from 'firebase/app'

import User from './user_help'
import Message from 'vue-m-message'
import Router from '../router'

export default {
    state: {
        user: null,
        userInfo: null,
        loadingCurrentUser: true,
        loadingUserInfos: false,
        userInfoList: [],
        deletedUserIDs: []
    },
    mutations: {
        setUser(state, payload){
            state.user = payload;
        },
        setUserInfo(state, payload){
            state.userInfo = payload;
        },
        setLoadingCurrentUser(state, payload){
            state.loadingCurrentUser = payload;
        },
        setLoadingUserInfos(state, payload){
            state.loadingUserInfos = payload;
        },
        setUserInfoList(state, payload){
            state.userInfoList = payload;
        },
        addUserToList(state, payload) {
            state.userInfoList.push(payload)
        },
        addDeletedUserID(state, payload) {
            state.deletedUserIDs.push(payload)
        }
     },
    actions: {
        async loadUserInfo ({commit, getters}, {userID}){
            commit('clearError')
            commit('setLoadingUserInfos', true)
            try{
                let userInfos = await firebase.database().ref('userInfos/'+userID).once('value');
                if(!userInfos.exists())
                {
                    commit('addDeletedUserID', userID)
                    commit('setLoadingUserInfos', false)
                    return null;
                }   
                let userInfosVal = userInfos.val();

                let u = userInfosVal
                if(u.allowWallPublications == undefined)
                    u.allowWallPublications = false;
                if(u.allowCommentsOnWall == undefined)
                    u.allowCommentsOnWall = true;
                if(u.showDateOfBirth == undefined)
                    u.showDateOfBirth = true;
                if(u.birthDate == undefined)
                    u.birthDate = (new Date()).toString()
                    

                let newUserInfo = {}
                newUserInfo.id = u.id;
                newUserInfo.comrades = u.comrades;
                newUserInfo.name = u.name;
                newUserInfo.lastName = u.lastName;
                newUserInfo.birthDate = u.birthDate;
                
                if(u.image){
                    await firebase.storage().ref().child('userAvatars/' + u.id)
                    .getDownloadURL().then((url) => { 
                        newUserInfo.image = url
                    });
                }
                else {
                    let images = require.context('../assets/', false, /\.svg$/);
                    newUserInfo.image = images("./anonymous.svg")
                }
                newUserInfo.isAdmin = u.isAdmin;

                newUserInfo.status = u.status;
                newUserInfo.about = u.about;

                // Настройки
                newUserInfo.allowWallPublications = u.allowWallPublications
                newUserInfo.allowCommentsOnWall = u.allowCommentsOnWall
                newUserInfo.showDateOfBirth = u.showDateOfBirth

                if(!getters.getUserList.some(u => u.id === newUserInfo.id))
                    commit('addUserToList', newUserInfo)
                commit('setLoadingUserInfos', false)
                return newUserInfo;
            }
            catch(error){
                commit('setLoadingUserInfos', false)
                commit('setError', error.message)
                Message.error(error.message);
                throw error
            }
        },
        async registerUser ({commit}, {email, password, name, lastName, birthDate}){
            commit('clearError')
            try{
                const user = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(user.user.uid))

                let newUserInfo = {}
                newUserInfo.id = user.user.uid;
                newUserInfo.name = name;
                newUserInfo.lastName = lastName;
                newUserInfo.birthDate = birthDate.toString();
                newUserInfo.comrades = [];
                newUserInfo.image = "";
                newUserInfo.status = "";
                newUserInfo.about = "";
                // Добавить подробную информацию о пользователе в БД
                await firebase
                .database()
                .ref('userInfos/'+user.user.uid)
                .set(newUserInfo)
                
                commit('setUserInfo', newUserInfo)
            }
            catch(error){
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
        async loginUser ({commit}, {email, password}){
            commit('clearError')
            try{
                const user = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password)

                let userInfo = await firebase
                .database()
                .ref('userInfos/' + user.user.uid)
                .once('value')

                userInfo = userInfo.val()
                
                commit('setUser', new User(user.user.uid))
                commit('setUserInfo', userInfo)
            }
            catch(error){
                commit('setError', error.message)
                let message = "";
                switch(error.message){
                    case "The password is invalid or the user does not have a password.":
                        message = "Пароль неверный. Проверьте правильность написания."
                        break;
                    case "There is no user record corresponding to this identifier. The user may have been deleted.":
                        message = "Пользователя с данным email не существует.";
                        break;
                    default: 
                        message = error.message; 
                        break;
                }
                Message.error(message);
                throw error
            }
        },
        async loggedUser({commit}, payload){
            commit('setLoadingCurrentUser', true)
            try{
                let userInfo = await (await firebase.database().ref('userInfos/'+payload.uid).once('value')).val()
                commit('setUser', new User(payload.uid))
                commit('setUserInfo', userInfo)
            }
            catch(error){
                commit('setError', error.message)
                Message.error(error.message)
                throw error
            }
            finally{
                if(Router.currentRoute.path == "/"){
                    Router.push('/feed')
                }
                commit('setLoadingCurrentUser', false)
            }
        },
        async changeUserInfo({commit}, payload){
            try{
                commit('setLoadingCurrentUser', true)
                await firebase
                .database()
                .ref('userInfos/'+payload.id)
                .set(payload);
                Message.success("Информация профиля изменена.");
            }
            catch(error){
                commit('setError', error.message)
                Message.error(error.message)
                throw error
            }
            finally{
                commit('setLoadingCurrentUser', false)
            }
        },
        async loadAllUserInfos({commit, dispatch}) {
            commit('setLoadingUserInfos', true)
            try {
                let userInfos = await firebase.database().ref().child('userInfos').once('value');
                let userInfoVals = await userInfos.val()
                Object.keys(userInfoVals).forEach(async (key) => {
                    await dispatch('loadUserInfo', { userID: key })
                })
                commit('setLoadingUserInfos', false)
            }
            catch(error) {
                commit('setLoadingUserInfos', false)
                Message.error(error.message);
                throw error
            }
        }
    },
    getters: {
        user (state){
            return state.user;
        },
        checkUser(state){
            return state.user !== null;
        },
        getUserInfo(state){
            return state.userInfo;
        },
        getUserList(state){
            return state.userInfoList;
        },
        getLoadingCurrentUser(state){
            return state.loadingCurrentUser;
        },
        getLoadingUserInfos(state){
            return state.loadingUserInfos;
        },
        getUserById: (state, getters) => (id) => {
            let userList = getters.getUserList;
            let user = {
                name: "[Loading]",
                lastName: ""
            }
            Object.keys(userList).forEach(key =>{
                const currentUser = userList[key]
                if(currentUser.id === id){
                    user = currentUser;
                }
            })
            return user;
        },
        getDeletedUserIDs(state) {
            return state.deletedUserIDs
        }
    },
    modules: {

    }
}