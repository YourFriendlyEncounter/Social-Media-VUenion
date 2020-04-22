<template>
    <div class="post-comment-outer" :class="{ 'is-reply': isReply }">
        <div class="post-comment">
            <div class="post-comment-inner">
                <p
                v-if="getUser.id == getComment.user || isUserAdmin || canDelete" 
                class="post-comment-delete"
                @click="deletePostOrComment(getComment)"></p>

                <div class="post-author-photo-block" v-if="getAuthorById(getComment.user).name != '[Loading]'"> 
                    <router-link 
                    :to="{ name: 'UserProfile', params: { id: getComment.user }}"> 
                        <img :src="getAuthorById(getComment.user).image" width="32" height="32">
                    </router-link>
                </div>
                <LoadingSmall v-else />
                <div class="post-author-name-date-block">
                    <router-link 
                        class="link-user"
                        :class="{ 'is-admin-name': getAuthorById(getComment.user).isAdmin }"
                        :to="{ name: 'UserProfile', params: { id: getComment.user }}"> 
                        {{ getAuthorById(getComment.user).name }} {{ getAuthorById(getComment.user).lastName }}
                    </router-link>
                    <p> {{ getRelativeDate(getComment.dateTimeAdded) }} </p>
                </div>
                <p style="margin-left: 0.5rem; word-break: break-word;">{{ getComment.text }}</p>
            </div>
            <div class="comment-rating">
                <div />
                <Rating :post="getComment" :canAddComment="!isReply" />
            </div>
        </div>

        <div class="post-comment-replies" 
        v-if="!isReply">
            <Comment 
            v-for="reply in getReplies" :key="reply.id"
            :commentID="reply.id"
            :deletePostOrComment="deletePostOrComment"
            :getAuthorById="getAuthorById"
            :getRelativeDate="getRelativeDate"
            :isUserAdmin="isUserAdmin" 
            :isReply="true" 
            :canDelete="canDelete"/>
        </div>
        <NewComment 
        v-if="isShowingNewCommentPanel" 
        :post="getComment" 
        :userImage="getAuthorById(getUser.id).image" 
        :isReply="true"
        :field="getComment.field"/>
    </div>
</template>

<script>
import Rating from '../components/Rating'
import NewComment from '../components/NewComment'
import Comment from './Comment'
import LoadingSmall from './LoadingSmall'

export default {
    name: 'Comment',
    components: {
        Rating,
        Comment,
        NewComment,
        LoadingSmall
    },
    computed: {
        checkUser() {
            return this.$store.getters.checkUser;
        },
        getUser(){
            let user = this.$store.getters.user;
            if(!user){
                return {id: ""}
            }
            else return user
        },
        getReplies() {
            return this.$store.getters.getPosts.slice().filter(p => p.target == this.commentID)
        },
        getComment() {
            return this.$store.getters.getPosts.find(p => p.id === this.commentID)
        },
        isShowingNewCommentPanel() {
            return this.$store.getters.getDisplayingNewCommentPanel === this.commentID
        },
    },
    props: {
        commentID: String,
        deletePostOrComment: Function,
        getAuthorById: Function,
        getRelativeDate: Function,
        isUserAdmin: Boolean,
        isReply: Boolean,
        canDelete: Boolean
    },
    async beforeMount() {
        let author = this.getAuthorById(this.getComment.user);
        if(author.name == "[Loading]"){
            author = await this.$store.dispatch('loadUserInfo', {userID: this.getComment.user})
        }
    }
}
</script>

<style scoped>
.is-reply{
    margin-left: 2rem;
}
.is-admin-name{
    color: rgb(206, 33, 33);
}
.post-author-photo-block img{
    margin-right: .5rem;
    border-radius: 25px;
}
.post-author-name-date-block p{
    font-size: 80%;
    color: gray;
}

.post-comment-inner{
    display: flex;
}

.post-comment {
    margin-top: 0.75rem;
    margin-left: 1.5rem;
    display: flex;
    justify-content: space-between;
    animation: .5s slow-appear;
}

@media screen and (min-width: 900px){
}

@media screen and (max-width: 899px){
    .post-comment {
        margin-top: 0.75rem;
        margin-left: 1.5rem;
        display: flex; 
        flex-direction: column;
        justify-content: flex-end;
    }

    .comment-rating {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
    }
    
    hr {
        border: 1px outset rgb(214, 214, 214);
    }
}

.post-comment-delete {
    opacity: 0.4;
    margin-right: 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
}

.post-comment-delete:before, .post-comment-delete:after {
  position: absolute;
  content: ' ';
  height: 16px;
  width: 2px;
  background-color: #333;
}

.post-comment-delete:before {
  transform: rotate(45deg);
}

.post-comment-delete:after {
  transform: rotate(-45deg);
}

.post-comment-delete:hover{
    opacity: 1;
}
</style>