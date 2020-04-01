<template>
    <div id="feed">
        <form id="form-new-post" @submit.prevent="newPost" v-if="checkUser">
            <textarea class="input-text" 
            id="new-post-text" 
            rows="3" maxlength="3000" 
            placeholder="Что интересного можете рассказать?" 
            v-model="newPostText"/>
            <input type="submit" id="new-post-submit" class="custom-button">
        </form>
        <div v-for="post in getPosts" :key="post.id" 
        class="container-white post-generic">
            <div class="post-author-info" >
                <div class="post-author-photo-block">
                    <img :src="getImage(post.user)" width=48>
                </div>
                <div class="post-author-name-date-block">
                    <router-link 
                    class="link-user"
                    :to="{ name: 'UserProfile', params: { id: post.user }}"> 
                        {{ getAuthorById(post.user).name }} {{ getAuthorById(post.user).lastName }}
                    </router-link>
                    <p> {{ getRelativeDate(post.dateTimeAdded) }} </p>
                </div>
            </div>
            <p class="post-text">{{ post.text }}</p>
        </div>
    </div>
</template>

<script>
import Post from '../store/post_help'
import Message from 'vue-m-message';

export default {
    computed: {
        getAuthors() {
            return this.$store.getters.getUserList;
        },
        checkUser(){
            return this.$store.getters.checkUser
        },
        getPosts() {
            return this.$store.getters.getPosts.slice().reverse()
        },
    },
    methods: {
        getAuthorById(id){
            return this.$store.getters.getUserById(id)
        },
        getImage(id){
            let author = this.getAuthorById(id);
            if(!author.image)
            {
                let images = require.context('../assets/', false, /\.svg$/);
                return images("./anonymous.svg")
            }
        },
        newPost(){
            if (this.newPostText.length < 3){
                Message.error("Нельзя опубликовать пост, длиной менее 3 символов.")
                return;
            }
            const newPost = new Post(
                this.newPostText,
                (new Date()).toString(),
                this.newPostImages,
                false,
                0,
                0,
                this.$store.getters.user.id
            )
            this.$store.dispatch('newPost', newPost)
                .then(() => {
                    this.sumbitStatus = "ok";
                    this.$router.push('/')
                    Message.success("Пост опубликован.")
                    this.newPostText = ""
                    this.newPostImages = []
                })
                .catch(err => {
                    this.sumbitStatus = err.message
                })
        },
        getRelativeDate(date){
            let postPublishDate = new Date(date);
            let currentDateInMinutes = new Date();

            let dateDiff = currentDateInMinutes - postPublishDate;
            let suffix = " мин. назад"

            dateDiff = Math.round((dateDiff/1000)/60);

            if(dateDiff >= 60){
                dateDiff /= 60;
                dateDiff = Math.floor(dateDiff);
                suffix = " ч. назад";
                if(dateDiff >= 24){
                    return postPublishDate.getDate() + "."
                    + (postPublishDate.getMonth() + 1) + "."
                    + postPublishDate.getFullYear() + " "
                    + (postPublishDate.getHours()<10?'0':'') + postPublishDate.getHours() + ":"
                    + (postPublishDate.getMinutes()<10?'0':'') + postPublishDate.getMinutes();
                }
            }
            else if(dateDiff === 0){
                return "Только что";
            }
            return dateDiff + suffix;
        }
    },
    data(){
        return {
            newPostText: "",
            newPostImages: [],
        }
    }
}
</script>

<style scoped>
#feed{
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
}
#form-new-post{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.link-user{
    color: blue;
}
#new-post-text{
    width: 100%;
    resize: none;
    height: auto;
}
#new-post-submit{
    margin: 0.4rem 0;
}
.post-generic{
    margin-bottom: 1rem;
    padding: 0.25rem 0.25rem;
    text-align: left;
}
.post-author-info{
    display: flex;
    align-items: center;
}
.post-author-photo-block img{
    margin-right: .5rem;
}
.post-text{
    overflow-wrap: break-word;
}
</style>