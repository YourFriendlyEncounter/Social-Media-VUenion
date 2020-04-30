<template>
    <div id="div-authorize-main">
        <div id="div-authorize-leftside">
            <h1>Оставайтесь на связи</h1>
            <p>Присоединяйтесь к дружному сообществу VUenion всего за несколько кликов</p>
            <img src="../assets/newUser.svg" width="256">
        </div>
        <div id="div-authorize">
            <div class="container-generic">
                <form id="form-registration" class="form-generic" @submit.prevent="createNewUser">
                    <h3>Моментальная регистрация</h3>
                    <input type="text" class="input-text" placeholder="Имя" name="name" required="true" minlength="3" maxlength="32" v-model="name">
                    <p>Видно всем пользователям</p>
                    <hr>
                    <input type="text" class="input-text" placeholder="Фамилия" name="lastName" required="true" minlength="3" maxlength="32" v-model="lastName">
                    <p>Видна всем пользователям</p>
                    <hr>
                    <date-picker :required="true"
                    v-model="birthDate" 
                    :clearable="false"
                    :editable="false"
                    :placeholder="'Дата рождения'"/>
                    <p>Видна всем по умолчанию</p>
                    <hr>
                    <input type="email" class="input-text" placeholder="E-mail" name="lastName" required="true" minlength="3" maxlength="32" v-model="email">
                    <p>Будет использован для авторизации</p>
                    <hr>
                    <input type="password" class="input-text" placeholder="Пароль" name="lastName" required="true" minlength="6" maxlength="32" v-model="password">
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
#div-authorize-leftside p {
    margin: .5rem 0;
}

.container-generic{
    margin: 1rem 0;
}
#form-registration {
    padding: 0.5rem 1rem;
}

#form-registration hr {
    width: 100%;
}

#form-registration p {
    color: gray;
    text-align: left;
    font-size: 80%;
    cursor: none;
}

#div-authorize-main{
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
    font-family: 'Montserrat';
}

@media screen and (max-width: 999px){
    #div-authorize-main{
        flex-direction: column;
    }

    #div-authorize-leftside{ 
        margin: 0;
    }
}

#div-authorize-leftside p{
    max-width: 400px;
}
#div-authorize{
    margin: 0 1rem;
}
h1{
    margin: 0.5rem 0;
}
input, .mx-datepicker{
    margin: 0.25rem 0rem;
}

h3 {
    margin: 1rem 0;
}
</style>