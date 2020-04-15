<template>
    <div class="post-comment-outer" :class="{ 'is-reply': isReply }">
        <div class="post-comment">
            <div class="post-comment-inner">
                <a 
                href="#"
                v-if="getUser.id == getComment.user || isUserAdmin || canDelete" 
                class="post-comment-delete"
                @click="deletePostOrComment(getComment)">X</a>

                <div class="post-author-photo-block">
                    <img :src="getUserImageURL(getComment.user).link" width="32" height="32">
                </div>
                <div class="post-author-name-date-block">
                    <router-link 
                        class="link-user"
                        :class="{ 'is-admin-name': getAuthorById(getComment.user).isAdmin }"
                        :to="{ name: 'UserProfile', params: { id: getComment.user }}"> 
                        {{ getAuthorById(getComment.user).name }} {{ getAuthorById(getComment.user).lastName }}
                    </router-link>
                    <p> {{ getRelativeDate(getComment.dateTimeAdded) }} </p>
                </div>
                <p style="margin-left: 0.5rem; max-width: 70%;">{{ getComment.text }}</p>
            </div>
            <div>
                <Rating :post="getComment" :canAddComment="!isReply" />
            </div>
        </div>

        <div class="post-comment-replies" 
        v-if="!isReply">
            <Comment 
            v-for="reply in getReplies" :key="reply.id"
            :commentID="reply.id"
            :deletePostOrComment="deletePostOrComment"
            :getUserImageURL="getUserImageURL"
            :getAuthorById="getAuthorById"
            :getRelativeDate="getRelativeDate"
            :isUserAdmin="isUserAdmin" 
            :isReply="true" 
            :canDelete="canDelete"/>
        </div>
        <NewComment 
        v-if="isShowingNewCommentPanel" 
        :post="getComment" 
        :userImage="getUserImageURL(getUser.id).link" 
        :isReply="true"
        :field="getComment.field"/>
    </div>
</template>

<script>
import Rating from '../components/Rating'
import NewComment from '../components/NewComment'
import Comment from './Comment'

export default {
    name: 'Comment',
    components: {
        Rating,
        Comment,
        NewComment
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
        getUserImageURL: Function,
        getAuthorById: Function,
        getRelativeDate: Function,
        isUserAdmin: Boolean,
        isReply: Boolean,
        canDelete: Boolean
    },
    async beforeMount() {
        let author = this.getAuthorById(this.getComment.user);
        if(author.name == "[Deleted]"){
            author = await this.$store.dispatch('loadUserInfo', {userID: this.getComment.user})
        }
        await this.$store.dispatch('loadUserAvatarURL', {user: author})
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
.post-comment{
    display: flex;
    justify-content: space-between;
    margin-left: 1.5rem;
}
.post-comment   {
    margin-top: 0.75rem;
}
.post-comment-delete{
    margin-top: 0.5rem;
    margin-left: -1.25rem;
    margin-right: 1.25rem;
    width: 0;
    opacity: 0.4;
}
.post-comment-delete:hover{
    opacity: 1;
}
</style>