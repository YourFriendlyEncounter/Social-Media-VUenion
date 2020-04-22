<template>
    <div class="post-comment-new" :class="{ 'is-reply-newcomment': isReply }">
        <div class="post-commment-image-block">
            <img :src="userImage" width="32" height="32">
        </div>
        <form class="form-new-comment" @submit.prevent="newComment(post)">
            <input type="text" class="input-text" ref="commentText" placeholder="Напишите своё мнение..." />
            <button class="button-transparent-clickable" style="height: 34px; margin: 0 0 0 4px;"><img src="../assets/send.png" width="32" height="32"></button>
        </form>
    </div>
</template>

<script>
import Message from 'vue-m-message';

export default {
    props: {
        post: Object,
        userImage: String,
        isReply: Boolean,
        field: String
    },
    methods: {
        newComment(post){
            let commentText = this.output = this.$refs.commentText.value;
            if (commentText.length < 3){
                Message.error("Нельзя опубликовать комментарий, длиной менее 3 символов.")
                return;
            }
            let newPost = {};
            newPost.text = commentText;
            newPost.dateTimeAdded = (new Date()).toString();
            newPost.images = [];
            newPost.video = "";
            newPost.edited = false;
            newPost.liked = [];
            newPost.disliked = [];
            newPost.user = this.$store.getters.user.id;
            newPost.type = "comment";
            newPost.target = post.id;
            newPost.field = this.field;

            this.$store.dispatch('newPost', { type: 'comments', payload: newPost})
                .then(() => {
                    this.sumbitStatus = "ok";
                    this.$refs.commentText.value = ""
                })
                .catch(err => {
                    this.sumbitStatus = err.message
                })
        }
    },
}
</script>

<style scoped>
.is-reply-newcomment{
    margin-left: 3.5rem;
}
.post-comment-new{
    display: flex;
    margin-top: 0.5rem;
}
.post-commment-image-block img{
    border-radius: 25px;
    height: 32px;
    width: 32px;
}
.form-new-comment{
    margin-left: 0.5rem; 
    width: -webkit-fill-available;
    display: flex;
}
.input-text{
    padding-right: 0.5rem;
    width: -webkit-fill-available;
}
</style>