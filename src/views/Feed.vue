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
                <div style="display: flex; align-items: center;">
                    <div class="post-author-photo-block">
                        <img :src="getImageURL(post.user).link" width="48" height="48">
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
                <a 
                href="#"
                v-if="getUser.id == post.user || isUserAdmin" 
                class="post-delete"
                @click="deletePostOrComment(post)">X</a>
            </div>
            <p class="post-text">{{ post.text }}</p>
            <hr>
            <Rating :post="post" :showComment="true" />
            <div class="post-comment-section">
                <!--Комментарии-->
                <hr>
                <Comment 
                v-for="comment in getComments(post.id)" 
                :key="comment.id" 
                :comment="comment"
                :deletePostOrComment="deletePostOrComment"
                :getImageURL="getImageURL"
                :getAuthorById="getAuthorById"
                :getRelativeDate="getRelativeDate"
                :isUserAdmin="isUserAdmin" 
                :isReply="false" />

                <NewComment 
                v-if="checkUser && post.showComment" 
                :post="post" 
                :userImage="getImageURL(getUser.id).link" 
                />
            </div>
        </div>
    </div>
</template>

<script>
import Post from '../store/post_help'
import Message from 'vue-m-message';
import Rating from '../components/Rating'
import NewComment from '../components/NewComment'
import firebase from 'firebase/app'
import Comment from '../components/Comment'

export default {
    components: {
        Rating,
        NewComment,
        Comment
    },
    computed: {
        getAuthors() {
            return this.$store.getters.getUserList;
        },
        checkUser(){
            return this.$store.getters.checkUser
        },
        getUser(){
            return this.$store.getters.user;
        },
        getPosts() {
            return this.$store.getters.getPosts.slice().filter(p => p.type == "post" && p.target == "feed").reverse()
        },
        isUserAdmin() {
            return this.$store.getters.getUserInfo.isAdmin;
        }
    },
    methods: {
        getAuthorById(id){
            return this.$store.getters.getUserById(id)
        },
        getImageURL(id){
            let link = this.userAvatarImageURLs.slice().filter(i => i.id == id)[0];
            if(!link){
                let images = require.context('../assets/', false, /\.svg$/);
                link = {
                    id: "",
                    link: images("./anonymous.svg")
                }
            }
            return link
        },
        async loadImageURLs() {
            this.$store.commit('setLoadingFiles', true)
            let posts = this.getPosts;
            for(let i = 0; i < posts.length; i++){
                if(!this.getAuthorById(posts[i].user).image)
                    continue;
                try{
                    let URL = {
                        id: posts[i].user,
                        link: ""
                    }
                    await firebase.storage().ref().child('userAvatars/'+posts[i].user)
                    .getDownloadURL().then((url) => { 
                        URL.link = url 
                        this.userAvatarImageURLs.push(URL);
                    });
                }
                catch(error){
                    // Message.error(error.message)
                }
            }
            this.$store.commit('setLoadingFiles', false)
        },
        newPost(){
            if (this.newPostText.length < 3){
                Message.error("Нельзя опубликовать пост, длиной менее 3 символов.")
                return;
            }
            let newPost = new Post()
            newPost.text = this.newPostText;
            newPost.dateTimeAdded = (new Date()).toString();
            newPost.images = this.newPostImages;
            newPost.edited = false;
            newPost.liked = [];
            newPost.disliked = [];
            newPost.user = this.$store.getters.user.id;
            newPost.type = "post";
            newPost.target = "feed";

            this.$store.dispatch('newPost', newPost)
                .then(() => {
                    this.sumbitStatus = "ok";
                    this.$router.push('/')
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
        },
        getComments(postID){
            return this.$store.getters.getPosts.slice().filter(p => p.type == "comment" && p.target == postID);
        },
        deletePostOrComment(post){
            let message;
            post.type == "comment" ? message = "комментарий" : message = "пост";
            if(confirm("Вы уверены, что хотите удалить этот " + message + "? Это действие нельзя будет отменить.")){
                this.$store.dispatch('deletePost', post)
            }
        }
    },
    data(){
        return {
            newPostText: "",
            newPostImages: [],
            userAvatarImageURLs: []
        }
    },
    beforeMount() {
        this.loadImageURLs()
    },
    mounted() {
        setInterval(() => this.$store.dispatch('loadPosts', {target: "feed"}), 30000)
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
    transition: 1s;
}
.post-author-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post-author-photo-block img{
    margin-right: .5rem;
    border-radius: 25px;
}
.post-author-name-date-block p{
    font-size: 80%;
    color: gray;
}
.post-delete{
    width: 0;
    opacity: 0.4;
    margin-right: 1rem;
    margin-top: -1.4rem;
}
.post-delete:hover{
    opacity: 1;
}

.post-text{
    overflow-wrap: break-word;
}
</style>