<template>
    <div id="div-authorize-main" class="">
        <div id="div-authorize-leftside">
            <h1>Оставайтесь на связи</h1>
            <p>Присоединяйтесь к дружному сообществу VUenion всего за несколько кликов</p>
            <img src="../assets/newUser.svg" width="256">
        </div>
        <div id="div-authorize">
            <div class="container-generic">
                <form id="form-registration" class="form-generic" @submit.prevent="createNewUser">
                    <h3>Моментальная регистрация</h3>
                    <input type="text" class="input-text" placeholder="Ваше имя" name="name" required="true" minlength="3" maxlength="32" v-model="name">
                    <input type="text" class="input-text" placeholder="Ваша фамилия" name="lastName" required="true" minlength="3" maxlength="32" v-model="lastName">
                    <input type="email" class="input-text" placeholder="Ваш e-mail" name="lastName" required="true" minlength="3" maxlength="32" v-model="email">
                    <input type="password" class="input-text" placeholder="Ваш пароль" name="lastName" required="true" minlength="6" maxlength="32" v-model="password">
                    <date-picker :required="true"
                    v-model="birthDate" 
                    :clearable="false"
                    :editable="false"
                    :placeholder="'Ваша дата рождения'"/>
                    <input type="submit" class="custom-button" style="background-color:#42cc8c;" value="Зарегистрироваться">
                </form>
            </div>
            <div class="container-generic">
                <form id="form-login" class="form-generic" @submit.prevent="loginUser">
                    <h3>Уже есть аккаунт?</h3>
                    <input type="email" class="input-text" placeholder="Ваш e-mail" name="lastName" required="true" minlength="3" maxlength="32" v-model="loginEmail">
                    <input type="password" class="input-text" placeholder="Ваш пароль" name="lastName" required="true" minlength="6" maxlength="32" v-model="loginPassword">
                    <input type="submit" class="custom-button" style="background-color:#42cc8c;" value="Войти">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
//import $ from 'jquery'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import Message from 'vue-m-message';
import User from '../store/user'

export default {
    components: { DatePicker },
    methods: {
        createNewUser(){
            if(this.name.length < 3 || this.name.length > 32){
                Message.error("Длина имени должна быть более 3 символов и не должна превышать 32.");
                return;
            }
            if(this.lastName.length < 3 || this.lastName.length > 32){
                Message.error("Длина фамилии должна быть более 3 символов и не должна превышать 32.");
                return;
            }
            if(this.birthDate == null){
                Message.error("Укажите вашу дату рождения.");
                return;
            }
            const user = {
                email: this.email,
                password: this.password,
                name: this.name,
                lastName: this.lastName,
                birthDate: this.birthDate
            }
            this.$store.dispatch('registerUser', user)
                .then(() => {
                    this.sumbitStatus = "ok";
                    this.$router.push('/')
                    Message.success("Регистрация прошла успешно!")
                })
                .catch(err => {
                    this.sumbitStatus = err.message
                    User.commit('setLoading', false)
                })
        },
        loginUser(){
            const user = {
                email: this.loginEmail,
                password: this.loginPassword
            }
            this.$store.dispatch('loginUser', user)
                .then(() => {
                    this.sumbitStatus = "ok";
                    this.$router.push({path: "/feed"})
                    Message.success("Добро пожаловать, "+this.$store.getters.getUserInfo.name+"!")
                })
                .catch(err => {
                    this.sumbitStatus = err.message
                })
        }
    },
    data() {
      return {
          name: "",
          lastName: "",
          email: "",
          password: "",
          birthDate: null,
          loginEmail: "",
          loginPassword: ""
      };
    },
}
</script>

<style scoped>
.container-generic{
    margin: 1rem 0;
}
#div-authorize-main{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#div-authorize-leftside{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 4rem;
}
#div-authorize-leftside p{
    max-width: 400px;
}
#div-authorize{
    margin: 0 1rem;
}
h2{
    margin: 0.5rem 0 1.5rem 0;
}
input, .mx-datepicker{
    margin: 0.25rem 2rem;
}
</style>