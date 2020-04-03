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
        post,
        file
    }
})