<template>
    <header>
        <h1>VUenion</h1>
        <div />
        <div id="div-auth">
            <div id="div-auth-not-authorized" v-if="!checkUser">
                <router-link :to="'/'">Войти / Зарегистрироватсья</router-link>
            </div>
            <div id="div-auth-authorized" v-else>
                <h4>Добро пожаловать, {{ getUserInfo.name }}! </h4>
                <a @click="unlogUser" style="color: white; cursor: pointer; margin-left: .2rem;">Выйти</a>
            </div>
        </div>
    </header>
</template>

<script>
//import Message from 'vue-m-message'

export default {
    methods: {
        unlogUser(){
            this.$store.commit('unlogUser')
            this.$store.commit('setUser', null);
            this.$store.commit('setUserInfo', null);
            this.$router.push('/');
        },
    },
    computed: {
        checkUser(){
            return this.$store.getters.checkUser
        },
        getUser(){
            return this.$store.getters.user
        },
        getUserInfo(){
            return this.$store.getters.getUserInfo;
        }
    }
}
</script>

<style scoped>
header, #div-auth, #div-auth-not-authorized, #div-auth-authorized{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header{
    background: rgb(92, 151, 240);
    margin-bottom: 2rem;
    padding: 4px;
}
#div-auth-not-authorized a{
    margin: 0 4px;
    text-decoration: none;
    color: white;
}
</style>