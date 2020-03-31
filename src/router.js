import Vue from "vue"
import Router from "vue-router"
import store from "./store"

Vue.use(Router)


export default new Router({
    mode: "history",
    base: "/Social-Media/",
    routes: [
        {
            path: "/feed",
            name: "Feed",
            component: () => import('./views/Feed.vue'),
        },
        {
            path: "/",
            name: "Authorization",
            component: () => import('./views/Authorize.vue'),
            beforeEnter(to, from, next){
                store.getters.checkUser ? next("/feed") : next()
            }
        },
        {
            path: "/users/:id",
            name: "UserProfile",
            component: () => import('./views/PersonalPage.vue'),
            props: true
        }
    ]
})