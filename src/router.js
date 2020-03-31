import Vue from "vue"
import Router from "vue-router"
import store from "./store"

Vue.use(Router)

import Feed from './views/Feed.vue'
import Authorize from './views/Authorize.vue'

export default new Router({
    mode: "history",
    base: "/Social-Media/",
    routes: [
        {
            path: "/feed",
            name: "Feed",
            component: Feed,
            beforeEnter(to, from, next){
                store.getters.checkUser ? next() : next("/")
            }
        },
        {
            path: "/",
            name: "Authorization",
            component: Authorize,
            beforeEnter(to, from, next){
                store.getters.checkUser ? next("/feed") : next()
            }
        },
    ]
})