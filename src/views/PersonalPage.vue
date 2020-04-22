<template>
    <div id="personal-page" v-if="user">
        <div id="personal-page-top">
            <div id="personal-page-image">
                <vue-easy-lightbox
                    escDisabled
                    moveDisabled
                    :visible="profileImageVisible"
                    :imgs="user.image"
                    :index="0"
                    @hide="profileImageVisible = false"></vue-easy-lightbox>
                <img 
                :class="{ 'img-avatar': user.image} " 
                width="200" 
                :src="user.image" 
                style="min-height: 128; max-height: 300;"
                @click="showAvatar">
                <button 
                v-if="isUserMe" 
                id="button-edit-profile" 
                class="custom-button"
                @click="editProfile">
                Редактировать</button>
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
            let currentUser = this.$store.getters.user
            if(!currentUser) {
                return false
            }
            return this.id == currentUser.id
        },
        getBirthDate() {
            let date = new Date(this.user.birthDate)
            let difference = this.calculateAge(date)
            if(new Date() - date < 0) {
                difference = date.getFullYear() - new Date().getFullYear()
                return "Родится " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " (через " + (difference) + " " + this.getYearProperly(difference) + ")";
            }
            return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " (" + difference + " " + this.getYearProperly(difference) + ")";
        },
        getLoadedUsers() {
            return this.$store.getters.getUserList;
        }
    },
    methods: {
        getYearProperly(years) {
            if(years % 10 == 1)
                return "год"
            else if((years % 10 == 2 || years % 10 == 3 || years % 10 == 4) && (years % 100 - years % 10) / 10 != 1)
                return "года"
            else return "лет"
        },
        editProfile() {
            this.$router.push({ name: "EditProfile", params: { id: this.id }})
        },
        async setImageURL() {
            if(!this.user.image)
            {
                let images = require.context('../assets/', false, /\.svg$/);
                this.imageURL = images("./anonymous.svg")
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
        showAvatar() {
            if(this.user.image)
                this.profileImageVisible = true
        },
        calculateAge(dob) { 
            var diff_ms = new Date().getTime() - dob.getTime();
            var age_dt = new Date(diff_ms); 
        
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        }
    },
    data() {
        return {
            user: null,
            imageURL: "",
            profileImageVisible: false
        }
    },
    props: {
        id: String
    },
    created() {
        this.setCurrentPageUser().then(async () => {
            if(this.user == null){
                this.$router.go(-1);
                Message.error("Данный пользователь недоступен.")
                return;
            }
            if(this.user.name === "[Loading]"){
                await this.$store.dispatch('loadUserInfo', {userID: this.id})
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

#button-edit-profile {
    width: 100%;
}

.img-avatar{
    cursor: pointer;
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