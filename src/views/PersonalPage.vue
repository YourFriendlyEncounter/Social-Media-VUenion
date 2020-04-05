<template>
    <div id="personal-page">
        <div id="personal-page-top">
            <div id="personal-page-image">
                <img id="img-avatar" width="200" height="200">
                <button 
                v-if="isUserMe" 
                id="button-edit-profile" 
                class="custom-button"
                @click="editProfile"
                >Редактировать профиль</button>
            </div>
            <div id="personal-page-text-info">
                <h2> {{ user.name }} {{ user.lastName }}</h2>
                <p> {{ getInfo.status }} </p>
            </div>
        </div>
        <h2>О себе:</h2>
        <p> {{ getInfo.about }} </p>
    </div>    
</template>

<script>
export default {
    computed: {
        getCurrentPageUser() {
            return this.$store.getters.getUserById(this.id);
        },
        getAuthors() {
            return this.$store.getters.getUserList;
        },
        getInfo() {
            let tempUser = {}
            tempUser.about = this.user.about;
            if(!tempUser.about)
                tempUser.about = "Подробная информация о себе отсутствует."

            tempUser.status = this.user.status;
            if(!tempUser.status)
                tempUser.status = "Статус отсутствует."

            return tempUser;
        },
        isUserMe(){
            return this.id == this.$store.getters.user.id
        }
    },
    methods: {
        editProfile() {
            this.$router.push({ name: "EditProfile", params: { id: this.id }})
        },
        async findImageURL(){
            if(!this.user.image)
            {
                let images = require.context('../assets/', false, /\.svg$/);
                document.getElementById("img-avatar")
                .setAttribute('src', images("./anonymous.svg"))
            }
            else{
                let URL = this.$store.getters.getLoadedUserAvatarURLs.filter(u => u.id == this.user.id)
                // Если ссылка уже была загружена ранее.
                if(URL[0]){
                    document.getElementById("img-avatar")
                    .setAttribute('src', URL[0].link)
                }
                else{
                    let link = 'userAvatars/' + this.id;
                    let newLink = await this.$store.dispatch('getImage', link)
                    
                    document.getElementById("img-avatar")
                    .setAttribute('src', newLink)
                }
            }
        }
    },
    data() {
        return {
            user: null
        }
    },
    props: {
        id: String
    },
    beforeMount() {
        this.user = this.getCurrentPageUser
    },
    mounted() {
        this.findImageURL()
    }
}
</script>

<style scoped>
p{
    margin: 0.5rem 0;
}
#personal-page{
    width: 100%;
    text-align: left;
}
#personal-page-top{
    display:flex;
}
#personal-page-image{
    width: 200px;
    margin-bottom: 1rem;
}
#personal-page-text-info{
    margin: 0.5rem;
    text-align: left;
}
</style>