<template>
    <div id="edit-profile">
        <h1 id="h-edit-profile">Редактировать профиль</h1>
        <form id="form-edit-profile-main" class="form-generic container-generic" @submit.prevent="submitEdit">
            <h2>Основная информация</h2>
            <div class="simple-flex input-text" style="margin-bottom: 1rem;">
                <p style="margin-right: .5rem;">Фото профиля: </p>
                <input type="file" ref="file" accept="image/jpeg,image/jpg,image/png,image/gif" @change="handleFileUpload()">
            </div>
            <input type="text" class="input-text" placeholder="Имя" minlength="3" v-model="user.name" required>
            <input type="text" class="input-text" placeholder="Фамилия" minlength="3" v-model="user.lastName" required>
            <input type="text" class="input-text" placeholder="Статус" v-model="user.status">
            <date-picker :required="true"
                    v-model="user.birthDate" 
                    :clearable="false"
                    :editable="false"
                    :placeholder="'Дата рождения'"/>
            <textarea class="input-text" rows="3" maxlength="3000" id="textarea-about" placeholder="О себе" v-model="user.about"></textarea>
            <h2>Настройки приватности</h2>
            <div id="div-privacy-settings">
                <label><input type="checkbox" v-model="user.allowWallPublications"> Разрешить публикации на стене от других пользователей</label>
                <label><input type="checkbox" v-model="user.allowCommentsOnWall"> Разрешить комментарии на постах стены</label>
                <label><input type="checkbox" v-model="user.showDateOfBirth"> Показывать дату рождения на стене</label>
            </div>
            <div id="div-controls">
                <button class="custom-button" style="background-color:#ebce59;" @click.prevent="goBack">Отменить</button>
                <input type="submit" class="custom-button" style="background-color:#42cc8c;">
            </div>
        </form>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css'; 
import Message from 'vue-m-message';

export default {
    components: {
        DatePicker
    },
    computed: {
        getCurrentPageUser() {
            return this.$store.getters.getUserById(this.id);
        },
        getLoadedUsers() {
            return this.$store.getters.getUserList;
        },
        getUser() {
            return this.$store.getters.user;
        }
    },
    methods: {
        goBack() {
            this.$router.push({ name: 'UserProfile', params: { id: this.user.id }});
        },
        submitEdit() {
            if(this.user.name.length < 3 || this.user.lastName.length < 3){
                Message.error('Имя, фамилия пользователя не должны быть короче 3 символов')
                return
            }
            if(this.user.about.length > 3000){
                Message.error('Информация о себе не должна быть длиннее 3000 символов.')
                return
            }
            if(!this.user.image){
                this.user.image = false;
            }
            if(!this.user.comrades){
                this.user.comrades = []
            }
            this.user.birthDate = this.user.birthDate.toString()
            if(!this.user.isAdmin){
                this.user.isAdmin = false
            }
            this.userSet = true;
            let file = this.imageToSend
            let link = "userAvatars/" + this.user.id;

            if(this.imageToSend != null){
                this.$store.dispatch('sendFile', { link, file })
                this.user.image = true
            }
            this.$store.dispatch('changeUserInfo', this.user)
            this.$router.push({ name: 'UserProfile', params: { id: this.user.id }});
        },
        handleFileUpload() {
            this.imageToSend = this.$refs.file.files[0];
        },
        async setCurrentPageUser() {
            if(this.getLoadedUsers.some(u => u.id == this.id)){
                this.user = this.$store.getters.getUserById(this.id);
            }
            else {
                let id = this.id;
                this.user = await this.$store.dispatch('loadUserInfo', {userID: id})
            }
            if(this.id != this.getUser.id)
            {
                Message.error("Доступ отклонён.")
                this.$router.push({ name: 'UserProfile', params: { id: this.user.id }});
                return;
            }
        },
    },
    props: {
        id: String
    },
    data() {
        return {
            user: null,
            userSet: false,
            initialUser: null,
            imageToSend: null
        }
    },
    created() {
        this.setCurrentPageUser();
    },
    beforeDestroy() {
        if(!this.userSet){ 
            this.user.name = this.initialUser.name;
            this.user.lastName = this.initialUser.lastName;
            this.user.status = this.initialUser.status;
            this.user.about = this.initialUser.about;
            this.user.birthDate = this.initialUser.birthDate;
            this.user.allowWallPublications = this.initialUser.allowWallPublications;
            this.user.allowCommentsOnWall = this.initialUser.allowCommentsOnWall;
            this.user.showDateOfBirth = this.initialUser.showDateOfBirth;
        }
    },
    beforeMount() {
        let loadedUserInfo = this.getCurrentPageUser;
        this.user = loadedUserInfo;
        this.initialUser = { ...loadedUserInfo };
    }
}
</script>

<style scoped>
h2{
    margin: 0.25rem 0 0.5rem 0;
}
#h-edit-profile{
    margin-bottom: 1rem;
}
.mx-datepicker{
    margin: 0 0 1rem 0;
}
.input-text:not(:last-child){
    margin-bottom: 1rem;
}
#textarea-about{
    resize: vertical; 
    min-height: 2.1rem;
    max-height: 12rem; 
}
.custom-button{
    width: 49%;
}
#div-privacy-settings{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 1rem;
}
#div-controls{
    display: flex;
    justify-content: space-between;
}
</style>