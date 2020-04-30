<template>
    <div  
        class="container-white post-generic">
            <div class="post-author-info" v-if="getAuthorById(post.user).name != '[Loading]'">
                <div style="display: flex; align-items: center;">
                    <div class="post-author-photo-block">
                        <router-link 
                        :to="{ name: 'UserProfile', params: { id: post.user }}"> 
                            <img :src="getAuthorById(post.user).image" width="48" height="48">
                        </router-link>
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
                <p
                v-if="getUser.id == post.user || isUserAdmin || canDelete" 
                class="post-delete"
                @click="deletePostOrComment(post)"></p>
            </div>
            <LoadingSmall v-else />
            <p class="post-text">{{ post.text }}</p>
            <div v-if="post.video" style="display: flex; flex-direction: column; align-items: center;">
                <hr style="margin: 0.5rem 0; width: 100%;">
                <iframe class="video-frame"
                :src="'https://www.youtube.com/embed/'+post.video">
                </iframe>
            </div>
            <div v-if="post.images" >
                <hr>
                <div class="post-image-gallery">
                    <vue-easy-lightbox
                    escDisabled
                    moveDisabled
                    :visible="visible"
                    :imgs="getImages"
                    :index="index"
                    @on-index-change="changeIndex"
                    @hide="handleHide"></vue-easy-lightbox>
                    <img
                    v-for="(image, imageIndex) in getImages"
                    :key="image"
                    @click="showImg(imageIndex)"
                    :src="image"
                    :class="{ 'image-single': getImages.length == 1, 'image-other': getImages.length > 1, 'is-picked-up': imageIndex == index}"
                    class="image">
                </div>
            </div>
            <hr>
            <Rating :post="post" :canAddComment="allowCommentsOnWall" />
            <div class="post-comment-section">
                <div v-if="getComments.length > 0">
                    <hr>
                    <Comment 
                    v-for="comment in getComments" 
                    :key="comment.id" 
                    :commentID="comment.id"
                    :deletePostOrComment="deletePostOrComment"
                    :getAuthorById="getAuthorById"
                    :getRelativeDate="getRelativeDate"
                    :isUserAdmin="isUserAdmin" 
                    :isReply="false" 
                    :canDelete="canDelete"/>
                </div>
                <NewComment 
                v-show="isShowingNewCommentPanel" 
                :post="post" 
                :userImage="getAuthorById(getUser.id).image" 
                :field="post.field"/>
            </div>
        </div>
</template>

<script>
//import Message from 'vue-m-message';
import Rating from './Rating'
import NewComment from './NewComment'
import Comment from './Comment'
import LoadingSmall from './LoadingSmall'
import moment from 'moment'

export default {
    components: {
        Rating,
        NewComment,
        Comment,
        LoadingSmall
    },
    methods: {
        changeIndex(oldIndex, newIndex) {
            this.index = newIndex;
        },
        showImg (index) {
            this.index = index
            this.visible = true
        },
        handleHide () {
            this.visible = false
            this.index = null
        },
        getAuthorById(id){
            let userInfo = this.$store.getters.getUserById(id)
            if(!userInfo){
                return {
                    name: "[Loading]",
                    isAdmin: false,
                    image: false
                }
            }
            else return userInfo
        },
        getRelativeDate(date){
            let postPublishDate = new Date(date);
            let currentDate = new Date();

            let dateDiff = currentDate - postPublishDate;
            let suffix = " мин. назад"

            dateDiff = Math.round((dateDiff/1000)/60);

            if(dateDiff >= 60){
                dateDiff /= 60;
                dateDiff = Math.floor(dateDiff);
                suffix = " ч. назад";
                if(postPublishDate.getDate() !== currentDate.getDate() || dateDiff >= 24){
                    let time = ((new Date().getTime() - new Date(date).getTime()) / (1000 * 60));
                    return moment().locale("ru").subtract(time, 'minutes').calendar()
                }
            }
            else if(dateDiff === 0){
                return "Только что";
            }
            return dateDiff + suffix;
        },
        deletePostOrComment(postToDelete){
            let message;
            postToDelete.type == "comments" ? message = "комментарий" : message = "пост";
            if(confirm("Вы уверены, что хотите удалить этот " + message + "? Это действие нельзя будет отменить.")){
                this.$store.dispatch('deletePost', { type: postToDelete.type, payload: postToDelete})
            }
        },
        async loadComments() {
            await this.$store.dispatch('loadPosts', { type: "comments", field: this.field, page: 0, itemsPerPage: 100});
        },
    },
    async beforeMount() {
        this.post = this.getPost
        await this.loadComments();
        let author = this.getAuthorById(this.post.user);
        if(author.name == "[Loading]"){
            author = await this.$store.dispatch('loadUserInfo', {userID: this.post.user})
        }
        if(this.post.images) {
            await this.$store.dispatch('loadPostImagesURLs', { post: this.post })
        }
    },
    data() {
        return {
            visible: false,
            index: null,
            post: null
        }
    },
    props: {
        postID: String,
        allowCommentsOnWall: Boolean,
        canDelete: Boolean,
        field: String
    },
    computed: {
        getComments(){
            return this.$store.getters.getPosts.slice().filter(p => p.target == this.postID);
        },
        isShowingNewCommentPanel() {
            return this.$store.getters.getDisplayingNewCommentPanel === this.postID
        },
        getImages() {
            return this.$store.getters.getLoadedImagesURLs
            .filter(u => u.id == this.postID)
            .sort((u, u2) => u.number - u2.number)
            .map(u => u.link)
        },
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
        getPost() {
            return this.$store.getters.getPosts.find(p => p.id === this.postID)
        }
    },

}
</script>

<style scoped>

.link-user {
    color: blue;
}
.is-admin-name {
    color: rgb(206, 33, 33);
}

.post-generic{
    margin-bottom: 1rem;
    padding: 0.25rem 0.25rem;
    text-align: left;
    transition: 1s;
    animation: .5s slow-appear;
}

.post-author-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post-author-photo-block img {
    margin-right: .5rem;
    border-radius: 25px;
}

.post-author-name-date-block p {
    font-size: 80%;
    color: gray;
}

.post-delete {
    opacity: 0.4;
    margin-right: 0.5rem;
    margin-top: -3rem;
    cursor: pointer;
}

.post-delete:before, .post-delete:after {
  position: absolute;
  content: ' ';
  height: 16px;
  width: 2px;
  background-color: #333;
}

.post-delete:before {
  transform: rotate(45deg);
}

.post-delete:after {
  transform: rotate(-45deg);
}

.post-delete:hover {
    opacity: 1;
}

.post-text {
    white-space: pre-wrap;
    overflow-wrap: break-word;
}

.post-image-gallery {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: space-between;
    flex-wrap: wrap;
}

.is-picked-up {
    opacity: 0;
    transition: opacity .5s;
}

.image{
    margin: 0.25rem; 
    background-size: cover;
    cursor: pointer;
    transition: opacity .5s;
}

.image-single{
    max-height: 32rem;
    max-width: 100%;
}

.image-other{
    height: 96px;
}

@media screen and (min-width: 900px){
    .video-frame {
        height: 28vw;
        width: 100%;
    }
}

@media screen and (max-width: 899px){
    .video-frame {
        height: 53vw;
        width: 100%;
    }
}
</style>