import Vue from 'vue'
import Vuex from 'vuex';

import user from './user'
import post from './post'
import common from './common'
import file from './file'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        componentKey: 0
    },
    getters: {
        getComponentKey(state) {
            return state.componentKey
        }
    },
    mutations: {

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