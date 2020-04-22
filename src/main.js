import Vue from 'vue'
import App from './App.vue'

import router from './router'

// Vuex
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex);

// Vue message
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'
Vue.use(Message) // will mount `Vue.prototype.$message`

// Vue 
import Lightbox from 'vue-easy-lightbox'
Vue.use(Lightbox)
 
// Firebase 
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
  async created(){
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
    })
    const remoteConfig = firebase.remoteConfig();
    remoteConfig.settings = {
      minimumFetchIntervalMillis: 3600000,
    };
    remoteConfig.defaultConfig = ({
      'feed_publishing_allowed': false,
      'feed_commenting_allowed': false,
    });

    await remoteConfig.fetchAndActivate() 
    .catch((err) => {
      console.error(err);
    });

    this.$store.commit('setFeedPublishing', remoteConfig.getBoolean("feed_publishing_allowed"))
    this.$store.commit('setFeedCommenting', remoteConfig.getBoolean("feed_commenting_allowed"))
  }
}).$mount('#app')
