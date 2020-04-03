import firebase from 'firebase/app'

import User from './user_help'
import UserInfo from './user_info'
import Message from 'vue-m-message'
import Router from '../router'

export default {
    state: {
        user: null,
        userInfo: null,
        loadingCurrentUser: true,
        loadingUserInfos: true,
        userInfoList: []
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
        }
    },
    actions: {
        async loadUserInfos ({commit}){
            commit('clearError')
            commit('setLoadingUserInfos', true)
            try{
                let userInfos = await firebase.database().ref('userInfos').once('value');
                let userInfosVal = userInfos.val();
                const usersArray = []
                Object.keys(userInfosVal).forEach(key => {
                    const u = userInfosVal[key]

                    let newUserInfo = new UserInfo();
                    newUserInfo.id = u.id;
                    newUserInfo.comrades = u.comrades;
                    newUserInfo.name = u.name;
                    newUserInfo.lastName = u.lastName;
                    newUserInfo.birthDate = u.birthDate;
                    newUserInfo.image = u.image
                
                    newUserInfo.status = u.status;
                    newUserInfo.about = u.about;
 
                    usersArray.push(newUserInfo)
                })
                commit('setUserInfoList', usersArray)
                commit('setLoadingUserInfos', false)
            }
            catch(error){
                commit('setLoadingUserInfos', false)
                commit('setError', error.message)
                Message.error(error);
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

                let newUserInfo = new UserInfo()
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
                commit('serError', error.message)
                Message.error(error.message)
                throw error
            }
            finally{
                Router.push({ path: '/feed' })
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
                Router.push({ name: 'UserProfile', params: { id: payload.id }});
            }
            catch(error){
                commit('serError', error.message)
                Message.error(error.message)
                throw error
            }
            finally{
                commit('setLoadingCurrentUser', false)
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
                name: "[Deleted]",
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
    },
    modules: {

    }
}