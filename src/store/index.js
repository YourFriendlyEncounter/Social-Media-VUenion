import Vue from 'vue'
import Vuex from 'vuex';

import user from './user'
import post from './post'
import common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        common,
        user,
        post
    }
})