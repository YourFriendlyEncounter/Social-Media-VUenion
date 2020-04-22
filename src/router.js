import Vue from "vue"
import Router from "vue-router"
import store from "./store"

Vue.use(Router)

import EditProfile from './views/EditPage.vue'
import Feed from './views/Feed.vue'

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/feed",
            name: "Feed",
            component: Feed
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
        },
        {
            path: "/users/:id/edit",
            name: "EditProfile",
            component: EditProfile,
            props: true
        },
        {
            path: "/dependencies",
            name: "Dependencies",
            component: () => import('./views/Dependencies.vue'),    
            props: true
        },
        {
            path: "/all-users",
            name: "AllUsers",
            component: () => import('./views/AllUsers.vue'),
        },
        {
            path: "*",
            name: "404",
            component: () => import('./views/PageNotFound.vue')
        }
    ]
})