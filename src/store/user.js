import firebase from 'firebase/app'

import User from './user_help'
import UserInfo from './user_info'
import Message from 'vue-m-message'
import router from "vue-router"; 

export default {
    state: {
        user: null,
        userInfo: null,
        loading: true,
        userInfoList: []
    },
    mutations: {
        setUser(state, payload){
            state.user = payload;
        },
        setUserInfo(state, payload){
            state.userInfo = payload;
        },
        setLoading(state, payload){
            state.loading = payload;
        },
        setUserInfoList(state, payload){
            state.userInfoList = payload;
        }
    },
    actions: {
        async loadUserInfos ({commit}){
            commit('clearError')
            commit('setLoading', true)
            try{
                let userInfos = await firebase.database().ref('userInfos').once('value');
                let userInfosVal = userInfos.val();
                const usersArray = []
                Object.keys(userInfosVal).forEach(key => {
                    const u = userInfosVal[key]
                    usersArray.push(
                        new UserInfo(
                            u.id,
                            u.name,
                            u.lastName,
                            u.birthDate,
                        )
                    )
                })
                commit('setUserInfoList', usersArray)
                commit('setLoading', false)
            }
            catch(error){
                commit('setLoading', false)
                commit('setError', error.message)
                Message.error(error);
                throw error
            }
        },
        async registerUser ({commit}, {email, password, name, lastName, birthDate}){
            commit('clearError')
            commit('setLoading', true)
            try{
                const user = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(user.user.uid))
                const userInfo = new UserInfo(
                    user.user.uid,
                    name,
                    lastName,
                    birthDate.toString()
                );
                // Добавить подробную информацию о пользователе в БД
                await firebase
                .database()
                .ref('userInfos/'+user.user.uid)
                .set(userInfo)
                
                commit('setUserInfo', userInfo)

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
        async loginUser ({commit}, {email, password}){
            commit('clearError')
            commit('setLoading', true)
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

                commit('setLoading', false)
            }
            catch(error){
                commit('setLoading', false)
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
            let userInfo = await (await firebase.database().ref('userInfos/'+payload.uid).once('value')).val()
            commit('setUser', new User(payload.uid))
            commit('setUserInfo', userInfo)
            router.push('/feed')
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
        getLoading(state){
            return state.loading;
        }
    }
}