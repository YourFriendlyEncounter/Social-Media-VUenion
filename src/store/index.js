import Vue from 'vue'
import Vuex from 'vuex';

import user from './user'
import post from './post'
import common from './common'
import file from './file'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        componentKey: 0,
        interval: null
    },
    getters: {
        getComponentKey(state) {
            return state.componentKey
        },
    },
    mutations: {
        unlogUser(state) {
            firebase.auth().signOut();
            clearInterval(state.interval)
        },
        stopInterval(state){
            clearInterval(state.interval)
        },
        setInterval(state, payload) {
            clearInterval(state.interval)
            state.interval = payload;
        }
    },
    actions: {
        changeComponentKey({state}) {
            state.componentKey++;
        }
    },
    modules: {
        common,
        user,
        post,
        file
    }
})