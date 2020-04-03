<template>
    <div id="edit-profile">
        <h1 id="h-edit-profile">Редактировать профиль</h1>
        <form id="form-edit-profile-main" class="form-generic container-generic" @submit.prevent="submitEdit">
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
    },
    methods: {
        goBack() {
            this.$router.push({ name: "Feed" })
        },
        sayUnimplemented() {
            Message.error('Извините, пока что эта функция недоступна.')
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
                this.user.image = "";
            }
            if(!this.user.comrades){
                this.user.comrades = []
            }
            if(!this.user.birthDate){
                this.user.birthDate = new Date()
            }
            let userID = this.user.id;
            let file = this.imageToSend
            if(this.imageToSend != null){
                this.$store.dispatch('sendFile', { file, userID })
                this.user.image = true
            }
            this.$store.dispatch('changeUserInfo', this.user)
        },
        handleFileUpload() {
            this.imageToSend = this.$refs.file.files[0];
        }
    },
    props: {
        id: String
    },
    data() {
        return {
            user: null,
            imageToSend: null
        }
    },
    beforeMount() {
        let loadedUserInfo = this.getCurrentPageUser;
        this.user = loadedUserInfo;
    }
}
</script>

<style scoped>
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
#div-controls{
    display: flex;
    justify-content: space-between;
}
</style>