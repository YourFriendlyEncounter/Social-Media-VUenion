<template>
  <div id="app" v-if="!isLoading">
    <Header />
    <div id="main-content">
      <LeftSideBar id="left-side-bar" v-if="checkUser" />
      <div id="main-content-center">
        <router-view :key="$route.fullPath + $store.getters.getComponentKey" />
      </div>
      <div id="right-side-bar" v-if="checkUser" />
    </div>
  </div>
  <div v-else class="div-loading">
    <div class="loading-inside">
      <Loading :displayWhatLoading="false" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftSideBar from './components/LeftSideBar.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'App',
  components: {
    Header,
    LeftSideBar,
    Loading,
  },
  computed: {
      checkUser() {
          return this.$store.getters.checkUser
      },
      getUser() {
          return this.$store.getters.user
      },
      isLoading() {
        return this.$store.getters.getLoadingCurrentUser
      },
  }
}
</script>

<style>
body, h1, h2, h3, h4, p, a{
  margin: 0;
}

@keyframes slow-appear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.red {
  color: red;
}

.gray {
  color: gray;
}

@media screen and (min-width: 900px){
  #right-side-bar{
    width: 12rem;
  }

  #main-content{
    display: flex;
    justify-content: center;
  }

  #main-content-center{
    width: 50vw;
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 899px){
  #right-side-bar{
    width: 0;
  }

  #main-content{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  #main-content-center{
    margin: 1rem 1rem 3rem 1rem;
    display: flex;
    flex-direction: column;
  }

  #textarea-about {
    height: 4rem;
  }
}

.div-loading{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-inside{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

footer{
  bottom: 0;
  background: rgb(222, 236, 255);
  width: 100%;
  color: black;
}

footer a{
  text-decoration: none;
}

.container-generic{
  background-color: rgba(151, 231, 255, 0.2);
  border-radius: 2px;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
}

.container-white{
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
    border-radius: 2px;
    background-color: white;
}

.container-link{
  background-color: rgba(151, 231, 255, 0.2);
  border-radius: 2px;
  padding: 5px;   
  margin-bottom: 5px;
  display: flex; 
  justify-content: left;
  align-items: center;
  text-decoration: none;
  color: rgb(32, 32, 90);
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
}

.input-text{
  display: inline-block;
  box-sizing: border-box;
  height: 34px;
  padding: 6px 30px;
  padding-left: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}

.custom-button{
  display:inline-block;
  padding:0.4em 1.4em;
  border-radius: 4px;
  border-width: 1px;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto Slab',sans-serif;
  font-size: 100%;
  cursor: pointer;
  font-weight:100;
  color:#FFFFFF;
  background-color:#3369ff;
  box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  text-align:center;
  position:relative;
}

.custom-button:hover{
  text-shadow: 0 0 2em rgba(255,255,255,1);
  color:#FFFFFF;
  border-color:#FFFFFF;
}

.custom-button:active{
  box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
}

.form-generic{
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 4px;
}

.button-transparent-clickable{
    background: transparent;
    display: flex;
    align-items: center;
    margin-right: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    user-select: none;
    cursor: pointer;
}

.simple-flex{
  display: flex;
  align-items: center;
}

a{
  text-decoration: none;
}
</style>
