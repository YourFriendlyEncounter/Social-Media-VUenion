<template>
    <div>
            <div class="div-likes-dislikes">
                <p class="p-difference">{{ getDifference }}</p>
                <div class="tooltip">
                    <div class="div-tooltip-inside">
                        <h2>{{ getRatesCount(post.liked) }}</h2>
                    </div>
                    <button class="button-transparent-clickable button-like" @click="toggleLikePost(post)" :class="{ 'is-post-liked': isPostLiked(post) }">
                        <img src="../assets/like.png" width="24">
                    </button>
                </div>
                <div class="tooltip">
                    <div class="div-tooltip-inside">
                        <h2>{{ getRatesCount(post.disliked) }}</h2>
                    </div>
                    <button class="button-transparent-clickable button-dislike" @click="toggleDislikePost(post)" :class="{ 'is-post-disliked': isPostDisliked(post) }">
                        <img src="../assets/dislike.png" width="24">
                    </button>
                </div>
                <button 
                v-if="canAddComment"
                class="button-transparent-clickable button-comment" 
                :class="{ 'is-post-liked': post.showComment == true }"
                @click="showCommentClicked" >
                    <img src="../assets/chat.png" width="24">
                </button>
            </div>
    </div>
</template>

<script>
import Message from 'vue-m-message';

export default {
    methods: {
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
        toggleLikePost(post){
            if(this.isLoadingLikes)
                return;
            if(!this.checkUser){
                Message.error("Авторизуйтесь, чтобы оставлять отзывы.")
                return;
            }
            if(this.isPostDisliked(post)){
                this.toggleDislikePost(post)
            }
            let isToRemove = this.isPostLiked(post)
            let userID = this.getUser.id
            this.$store.dispatch('changeLikes', {post, userID, isToRemove})
        },
        toggleDislikePost(post) {
            if(this.isLoadingLikes)
                return;
            if(!this.checkUser){
                Message.error("Авторизуйтесь, чтобы оставлять отзывы.")
                return;
            }
            if(this.isPostLiked(post)){
                this.toggleLikePost(post)
            }
            let isToRemove = this.isPostDisliked(post)
            let userID = this.getUser.id
            this.$store.dispatch('changeDislikes', {post, userID, isToRemove})
        },
        showCommentClicked(){
            if(this.post.showComment == undefined){
                this.post.showComment = false;
            }
            this.post.showComment = !this.post.showComment;
            this.$store.dispatch('changeComponentKey')
            
        }
    },
    computed: {
        getUser() {
            return this.$store.getters.user;
        },
        checkUser() {
            return this.$store.getters.checkUser;
        },
        getDifference(){
            let rating = this.getRatesCount(this.post.liked) - this.getRatesCount(this.post.disliked);
            if(rating > 0)
                rating = "+"+rating;
            return rating;
        },
        isLoadingLikes() {
            return this.$store.getters.isLoadingLikes;
        }
    },
    props: {
        post: Object,
        canAddComment: Boolean,
    }
}
</script>

<style scoped>
.p-difference{
    margin: 0 8px 0 4px;
}
.div-likes-dislikes{
    display: flex;
    align-items: center;
    font-size: 100%;
    font-family: 'Roboto Slab', serif;
}
.is-post-liked{
    background-color: #cbeaff;
    border: 1px solid rgb(92, 92, 92);
}
.is-post-disliked{
    background-color: #ffcbcb;
    border: 1px solid rgb(92, 92, 92);
}
.button-transparent-clickable{
    height: 32px;
    border: none;
    border-radius: 5px;
}
.button-like:hover{
    background-color: #e6f5ff;
}
.button-dislike:hover{
    background-color: #ffe7e7;
}
.button-comment:hover{
    background-color: #e6f5ff;
}
.div-tooltip-inside{
    position: absolute;
    right: 46px;
    bottom: 58px;
    opacity: 0;

    transition: .2s;
    padding-top: 0.5rem;
    padding-bottom: 0;
}
.tooltip{
    position: relative;
}
.div-tooltip-inside h2{
    position: absolute;
    text-align: center;
    border-radius: 3px;
    color: white;
    width: 2.5rem;
    
    transition: .2s;
    background-color:rgba(126, 126, 126, 0.9);
    box-shadow: 2px 2px 4px #ccc;
}
.div-tooltip-inside h2::after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(126, 126, 126, 0.9) transparent transparent transparent;
}
.tooltip:hover .div-tooltip-inside{
    transition: .2s;
    opacity: 1;
    padding-top: 0;
    padding-bottom: 0.5rem;
}
</style>