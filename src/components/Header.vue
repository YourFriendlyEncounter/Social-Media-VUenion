<template>
    <header>
        <router-link :to="'/feed'" id="logo">
            <img src="../assets/connection.png" height="48">
            <h1>VUenion</h1>
        </router-link>
        <div id="div-auth">
            <div id="div-auth-not-authorized" v-if="!checkUser">
                <router-link :to="'/'">Войти / Зарегистрироваться</router-link>
            </div>
            <div id="div-auth-authorized" v-else>
                <h4>Добро пожаловать, {{ getUserInfo.name }}! </h4>
                <a @click="unlogUser" class="container-generic" style="padding: .2rem .5rem; color: white; cursor: pointer; margin-left: .2rem;">Выйти</a>
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
    padding: 4px;
    width: -webkit-fill-available;
    font-family: 'Montserrat';
    box-shadow: 0 2px 4px #ccc;
}

#logo {
    display: flex;
    align-items: center;
    text-decoration: none;
}

#logo h1{
    margin-left: 0.5rem;
    color: white;
    transition: text-shadow .2s;
    text-shadow: 1px 1px 3px black;
}

#div-auth-not-authorized a{
    margin: 0 4px;
    color: white;
}

#div-auth-authorized h4 { 
    color: white;
    margin: 0 4px;
}

@media screen and (min-width: 900px){
    #logo:hover h1{
        transition: text-shadow .2s;
        text-shadow: 1px 1px 3px rgb(212, 144, 18);
    }
}
@media screen and (max-width: 899px){
    #div-auth-authorized h4 { 
        display: none;
        width: 0;
    }
    #div-auth-not-authorized a{ 
        font-size: 75%;
    }
}
</style>