<template>
    <div>
        <hr>
            <div class="div-likes-dislikes">
                <button class="button-rate" @click="likePost(post)" :class="{ 'is-post-rated': isPostLiked(post) }">{{ getRatesCount(post.liked) }} <img src="../assets/like.png" width="24" style="margin-left: 4px;"></button>
                <button class="button-rate" @click="dislikePost(post)" :class="{ 'is-post-disliked': isPostDisliked(post) }">{{ getRatesCount(post.disliked) }} <img src="../assets/dislike.png" width="24" style="margin-left: 4px;"></button>
            </div>
        <hr>
    </div>
</template>

<script>
import Message from 'vue-m-message';

export default {
    methods: {
        // Rating
        getRatesCount(postRates){
            if(postRates == undefined)
                return 0;
            return postRates.length;
        },
        isPostLiked(post) {
            if(!post.liked || !this.checkUser)
                return false;
            return post.liked.includes(this.getUser.id);
        }, 
        isPostDisliked(post) {
            if(!post.disliked || !this.checkUser)
                return false;
            return post.disliked.includes(this.getUser.id);
        },
        likePost(post){
            if(!this.checkUser){
                Message.error("Авторизуйтесь, чтобы оставлять отзывы.")
                return;
            }
            if(this.isPostDisliked(post)){
                this.dislikePost(post)
            }
            let isToRemove = false;
            if(this.isPostLiked(post))
                isToRemove = true;
            else
                isToRemove = false;
            let userID = this.getUser.id
            this.$store.dispatch('changeLikes', {post, userID, isToRemove})
        },
        dislikePost(post) {
            if(!this.checkUser){
                Message.error("Авторизуйтесь, чтобы оставлять отзывы.")
                return;
            }
            if(this.isPostLiked(post)){
                this.likePost(post)
            }
            let isToRemove = false;
            if(this.isPostDisliked(post))
                isToRemove = true;
            else
                isToRemove = false;
            let userID = this.getUser.id
            this.$store.dispatch('changeDislikes', {post, userID, isToRemove})
        },
    },
    computed: {
        getUser() {
            return this.$store.getters.user;
        },
        checkUser() {
            return this.$store.getters.checkUser;
        }
    },
    props: {
        post: Object
    }
}
</script>

<style scoped>
.div-likes-dislikes{
    display: flex;
    align-items: center;
}
.button-rate{
    background: transparent;
    display: flex;
    align-items: center;
    margin-right: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    user-select: none;
    cursor: pointer;
}
.is-post-rated{
    background-color: #cbeaff;
    border: 1px solid rgb(92, 92, 92);
}
.is-post-disliked{
    background-color: #ffcbcb;
    border: 1px solid rgb(92, 92, 92);
}
</style>