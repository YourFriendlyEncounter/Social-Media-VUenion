import Vue from "vue"
import Router from "vue-router"
import store from "./store"
import Message from "vue-m-message"

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
            beforeEnter(to, from, next) {
                if(from.name == to.name)
                {
                    alert("aa")
                }
                store.getters.getUserById(to.params.id).name != "[Deleted]" ? next() : Message.error("Данный пользователь недоступен.")
            },
            props: true
        },
        {
            path: "/users/:id/edit",
            name: "EditProfile",
            component: () => import('./views/EditPage.vue'),
            beforeEnter(to, from, next) {
                to.params.id == store.getters.user.id ? next() : Message.error("Доступ отклонён.")
            },
            props: true
        },
    ]
})