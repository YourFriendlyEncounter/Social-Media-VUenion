<template>
  <div id="app" v-if="!isLoading">
    <Header></Header>
    <div id="main-content">
      <LeftSideBar v-if="checkUser" />
      <div id="main-content-center">
        <router-view :key="$route.fullPath" />
      </div>
      <RightSideBar v-if="checkUser" />
    </div>
    <footer>
      Icons made by 
      <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a>,
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, 
      <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a>,
      <a href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a>,
      <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a>,
      <a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a>,
      <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>,
      <a href="https://www.flaticon.com/authors/prosymbols" title="Prosymbols">Prosymbols</a>,
      <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a>,

      from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </footer>
  </div>
  <div v-else id="div-loading">
    <div id="loading-inside">
      <Loading :displayWhatLoading="false" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftSideBar from './components/LeftSideBar.vue'
import RightSideBar from './components/RightSideBar.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'App',
  components: {
    Header,
    LeftSideBar,
    RightSideBar,
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
        return this.$store.getters.getLoadingCurrentUser || this.$store.getters.getLoadingUserInfos || this.$store.getters.isSending || this.$store.getters.isLoadingFiles
      },
  }
}
</script>

<style>
body, h1, h2, h4, p{
  margin: 0;
}
#div-loading{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#loading-inside{
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
#main-content{
  display: flex;
  justify-content: center;
}
#main-content-center{
  width: 50vw;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
}
footer{
  position: fixed;
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
  padding:0.7em 1.7em;
  border-radius: 4px;
  border-width: 1px;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:400;
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
