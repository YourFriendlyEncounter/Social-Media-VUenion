<template>
    <div  
        class="container-white post-generic">
            <div class="post-author-info" >
                <div style="display: flex; align-items: center;">
                    <div class="post-author-photo-block">
                        <img :src="getUserImageURL(post.user).link" width="48" height="48">
                    </div>
                    <div class="post-author-name-date-block">
                        <router-link 
                        class="link-user"
                        :class="{ 'is-admin-name': getAuthorById(post.user).isAdmin }"
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
            <div v-if="post.images">
                <hr>
                <div class="post-images">
                    <div class="post-image" v-for="image in getImagesForPost" :key="image.link" >
                        <a :href="image.link">
                            <img :src="image.link" width="96" height="64">
                        </a>
                    </div>
                </div>
            </div>
            <hr>
            <Rating :post="post" :canAddComment="allowCommentsOnWall" />
            <div class="post-comment-section">
                <div v-if="getComments(post.id).length > 0">
                    <hr>
                    <Comment 
                    v-for="comment in getComments(post.id)" 
                    :key="comment.id" 
                    :comment="comment"
                    :deletePostOrComment="deletePostOrComment"
                    :getUserImageURL="getUserImageURL"
                    :getAuthorById="getAuthorById"
                    :getRelativeDate="getRelativeDate"
                    :isUserAdmin="isUserAdmin" 
                    :isReply="false" />
                </div>
                <NewComment 
                v-if="checkUser && post.showComment" 
                :post="post" 
                :userImage="getUserImageURL(getUser.id).link" 
                :field="post.field"/>
            </div>
        </div>
</template>

<script>
//import Message from 'vue-m-message';
import Rating from '../components/Rating'
import NewComment from '../components/NewComment'
import Comment from '../components/Comment'

export default {
    components: {
        Rating,
        NewComment,
        Comment
    },
    methods: {
        getAuthorById(id){
            let userInfo = this.$store.getters.getUserById(id)
            if(!userInfo){
                return {
                    name: "[Гость]",
                    isAdmin: false
                }
            }
            else return userInfo
        },
        getUserImageURL(id){
            let link = this.getUserAvatarImageURLs.slice().filter(i => i.id == id)[0];
            if(!link){
                let images = require.context('../assets/', false, /\.svg$/);
                link = {
                    id: "",
                    link: images("./anonymous.svg")
                }
            }
            return link
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
        deletePostOrComment(postToDelete){
            let message;
            postToDelete.type == "comment" ? message = "комментарий" : message = "пост";
            if(confirm("Вы уверены, что хотите удалить этот " + message + "? Это действие нельзя будет отменить.")){
                this.$store.dispatch('deletePost', postToDelete)
            }
        }
    },
    props: {
        post: Object,
        allowCommentsOnWall: Boolean
    },
    computed: {
        getAuthors() {
            return this.$store.getters.getUserList;
        },
        checkUser(){
            return this.$store.getters.checkUser
        },
        getUser(){
            let user = this.$store.getters.user;
            if(!user){
                return {id: ""}
            }
            else return user
        },
        isUserAdmin() {
            let userInfo = this.$store.getters.getUserInfo;
            if(!userInfo){
                return false
            }
            else return userInfo.isAdmin
        },
        getUserAvatarImageURLs() {
            return this.$store.getters.getLoadedUserAvatarURLs
        },
        getImagesForPost(){
            return this.$store.getters.getLoadedImagesURLs.filter(u => u.id == this.post.id)
        }
    },
}
</script>

<style scoped>
.link-user{
    color: blue;
}
.is-admin-name{
    color: rgb(206, 33, 33);
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
.post-images{
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: space-between;
    flex-wrap: wrap;
}
.post-image{
    margin: 0.25rem;
    display: flex;
    align-content: center;
}
</style>