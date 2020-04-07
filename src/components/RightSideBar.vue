<template>
    <div>
        <h4>Список товарищей</h4>
        <hr>
        <router-link 
        v-for="friend in getFriendsFilteredByOnline" 
        :key="friend.id" 
        :to="friend.link"
        class="link-friend">
            <div class="container-generic div-friend" style="padding: 0.25rem 0.5rem;">
                <h4 class="h-name">{{ friend.name + ' ' + friend.lastName}}</h4>
                <p v-if="friend.isOnline" class="p-online">Online</p>
                <p v-else class="p-offline">Offline</p>
            </div>
        </router-link>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return{
            friends: [
                {
                    id: 0,
                    name: "NameOne",
                    lastName: "LastNameOne",
                    link: "",
                    isOnline: true
                },
                {
                    id: 1,
                    name: "NameTwo",
                    lastName: "LastNameTwo",
                    link: "",
                    isOnline: false
                },
                {
                    id: 2,
                    name: "NameThree",
                    lastName: "LastNameThree",
                    link: "",
                    isOnline: true
                }
            ]
        }
    },
    computed: {
        getFriendsFilteredByOnline(){
            return this.friends.concat().sort((f, f2) => f2.isOnline - f.isOnline); 
        }
    },
    beforeMount() {
        
    }
}
</script>

<style scoped>
.link-friend{
    text-decoration: none;
}
.h-name{
    margin: 0.5rem 0;
    text-align: left;
}
p{
    margin: 0;
    text-align: left;
}
.p-online{
    color: green;
}
.p-offline{
    color: gray;
}
.div-friend{
    margin: 0.5rem 0;
}
.div-friend:hover{
    background-color: rgba(151, 231, 255, 0.5);
}
</style>