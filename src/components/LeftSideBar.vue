<template>
    <div id="left-side-bar">
        <h4 id="side-bar-label">Главное меню</h4>
        <hr>
        <router-link  
        v-for="option in options" 
        :key="option.name" 
        :to="{ name: option.link, params:{ id: getUserID }}"
        class="container-link">
            <img 
            :src="require('../assets/' + option.image)" 
            class="img-icon"/>
            <h4>{{ option.name }}</h4>
        </router-link>
        <hr>
    </div>
</template>

<script>
export default {
    data(){
        return{
            options: [
                {
                    name: "Лента",
                    image: "web.svg",
                    link: "Feed"
                },
                {
                    name: "Моя страница",
                    image: "house.png",
                    link: "UserProfile"
                },
                {
                    name: "Все пользователи",
                    image: "friends.png",
                    link: "AllUsers"
                },
                /*{
                    name: "Сообщения",
                    image: "messages.png",
                    link: "Feed"
                },*/
                /*{
                    name: "Группы",
                    image: "groups.png",
                    link: "Feed"
                },*/
                {
                    name: "Зависимости",
                    image: "customer.png",
                    link: "Dependencies"
                }
            ]
        }
    },
    computed: {
        getUserID() {
            return this.$store.getters.user.id;
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 900px){
    #left-side-bar{
        margin-top: 1rem;
        width: 12rem;
    }

    .img-icon{
        width: 24px;
        margin: 0 8px 0 0;
    }
}

@media screen and (max-width: 899px){
    #left-side-bar{
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-evenly;
        background: rgb(255, 255, 255);
        box-shadow: 0px 0px 4px black;
        z-index: 999;
    }

    h4, hr {
        display: none;
    }

    .container-link {
        margin: .25rem .25rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .img-icon{
        width: 32px;
    }
}
h4{
    margin: 0;
    text-align: left;
}
.container-link:hover{
    background-color: rgba(151, 231, 255, 0.5);
}
</style>