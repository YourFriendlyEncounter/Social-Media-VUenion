<template>
    <div id="left-side-bar">
        <h4>Главное меню</h4>
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
                    name: "Товарищи",
                    image: "friends.png",
                    link: "Feed"
                },
                {
                    name: "Сообщения",
                    image: "messages.png",
                    link: "Feed"
                },
                {
                    name: "Группы",
                    image: "groups.png",
                    link: "Feed"
                },
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
#left-side-bar{
    width: 12rem;
}
h4{
    margin: 0;
    text-align: left;
}
.container-link:hover{
    background-color: rgba(151, 231, 255, 0.5);
}
.img-icon{
    width: 24px;
    margin: 0 8px 0 0;
}
</style>