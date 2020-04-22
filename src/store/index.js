import Vue from 'vue'
import Vuex from 'vuex';

import user from './user'
import post from './post'
import common from './common'
import file from './file'
import firebase from 'firebase/app'
import 'firebase/remote-config'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        componentKey: 0,
        feed_publishing_allowed: false,
        feed_commenting_allowed: false
    },
    getters: {
        getComponentKey(state) {
            return state.componentKey
        },
        getFeedPublishing(state) {
            return state.feed_publishing_allowed;
        },
        getFeedCommenting(state) {
            return state.feed_commenting_allowed;
        }
    },
    mutations: {
        unlogUser(state) {
            firebase.auth().signOut();
            clearInterval(state.interval)
        },
        setFeedPublishing(state, payload) {
            state.feed_publishing_allowed = payload;
        },
        setFeedCommenting(state, payload) {
            state.feed_commenting_allowed = payload;
        }
    },
    actions: {
        changeComponentKey({state}) {
            state.componentKey++;
        },
    },
    modules: {
        common,
        user,
        post,
        file
    }
})