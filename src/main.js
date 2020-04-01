import Vue from 'vue'
import App from './App.vue'

import router from './router'

import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex);

import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'
Vue.use(Message) // will mount `Vue.prototype.$message`

import firebase from 'firebase/app'
import 'firebase/auth' 
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'   

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBoFRDJ8fnZLp__tAKH4K3itDXnqWuh5m0",
      authDomain: "social-media-vuenion.firebaseapp.com",
      databaseURL: "https://social-media-vuenion.firebaseio.com",
      projectId: "social-media-vuenion",
      storageBucket: "social-media-vuenion.appspot.com",
      messagingSenderId: "1079493678730",
      appId: "1:1079493678730:web:65b950d29e5f926aca7f73"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('loggedUser', user)
      }
      else this.$store.commit('setLoadingCurrentUser', false)
      this.$store.dispatch('loadPosts');
      this.$store.dispatch('loadUserInfos');
    })
  }
}).$mount('#app')
