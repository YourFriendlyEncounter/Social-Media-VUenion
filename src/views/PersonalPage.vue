<template>
    <div id="personal-page" v-if="user">
        <div id="personal-page-top">
            <div id="personal-page-image">
                <img id="img-avatar" width="200" :src="imageURL" style="min-height: 128; max-height: 300;">
                <button 
                v-if="isUserMe" 
                id="button-edit-profile" 
                class="custom-button"
                @click="editProfile">
                Редактировать профиль</button>
            </div>
            <div id="personal-page-text-info">
                <h2> {{ user.name }} {{ user.lastName }}</h2>
                <p> {{ getInfo.status }} </p>
                <p v-if="user.showDateOfBirth"> {{ getBirthDate }} </p>
            </div>
        </div>
        <h2>О себе:</h2>
        <p> {{ getInfo.about }} </p>
        <h2 style="margin-bottom: 0.5rem;">Лента: </h2>
        <PostSection 
        :field="user.id" 
        :canDelete="isUserMe"
        :allowPosting="user.allowWallPublications || isUserMe" 
        :allowCommentsOnWall="user.allowCommentsOnWall"/>
    </div>
    <div v-else class="div-loading">
        <div class="loading-inside">
        <Loading :displayWhatLoading="false" />
        </div>
    </div>
</template>

<script>
import PostSection from '../components/PostSection'
import Loading from '../components/Loading.vue'
import Message from 'vue-m-message'

export default {
    components: {
        PostSection,
        Loading
    },
    computed: {
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
        },
        getBirthDate() {
            let date = new Date(this.user.birthDate)
            let difference = Math.floor(((new Date) - date.getTime()) / 31536000000);
            if(difference < 0){
                return "Родится " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " (через " + (-difference - 1) + " " + this.getYearProperly(-difference - 1) + ")";
            }
            return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " (" + difference + " " + this.getYearProperly(difference) + ")";
        },
        getLoadedUsers() {
            return this.$store.getters.getUserList;
        }
    },
    methods: {
        getYearProperly(years){
            if(years % 10 == 1)
                return "год"
            else if((years % 10 == 2 || years % 10 == 3 || years % 10 == 4) && (years % 100 - years % 10) / 10 != 1)
                return "года"
            else return "лет"
        },
        editProfile() {
            this.$router.push({ name: "EditProfile", params: { id: this.id }})
        },
        async setImageURL(){
            if(!this.user.image)
            {
                let images = require.context('../assets/', false, /\.svg$/);
                this.imageURL = images("./anonymous.svg")
            }
            else{
                let URL = this.$store.getters.getLoadedUserAvatarURLs.find(u => u.id == this.user.id)
                // Если ссылка уже была загружена ранее.
                if(URL){
                    this.imageURL = URL.link
                }
                else{
                    let link = 'userAvatars/' + this.id;
                    let newLink = await this.$store.dispatch('getImage', { link: link })
                    
                    this.imageURL = newLink
                }
            }
        },
        async setCurrentPageUser() {
            if(this.getLoadedUsers.some(u => u.id == this.id)){
                this.user = this.$store.getters.getUserById(this.id);
            }
            else {
                let id = this.id;
                this.user = await this.$store.dispatch('loadUserInfo', {userID: id})
            }
        },
    },
    data() {
        return {
            user: null,
            imageURL: ""
        }
    },
    props: {
        id: String
    },
    created() {
        this.setCurrentPageUser().then(() => {
            if(this.user == null){
                this.$router.go(-1);
                Message.error("Данный пользователь недоступен.")
                return;
            }
            this.setImageURL()
        })
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