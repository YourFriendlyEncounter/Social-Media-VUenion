<template>
    <div>
            <div class="div-likes-dislikes">
                <p class="p-difference">{{ getDifference }}</p>
                <div class="tooltip">
                    <h2>{{ getRatesCount(post.liked) }}</h2>
                    <button class="button-transparent-clickable button-like" @click="likePost(post)" :class="{ 'is-post-liked': isPostLiked(post) }">
                        <img src="../assets/like.png" width="24">
                    </button>
                </div>
                <div class="tooltip">
                    <h2>{{ getRatesCount(post.disliked) }}</h2>
                    <button class="button-transparent-clickable button-dislike" @click="dislikePost(post)" :class="{ 'is-post-disliked': isPostDisliked(post) }">
                        <img src="../assets/dislike.png" width="24">
                    </button>
                </div>
            </div>
    </div>
</template>

<script>
import $ from 'jquery'
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
        },
        getDifference(){
            let rating = this.getRatesCount(this.post.liked) - this.getRatesCount(this.post.disliked);
            if(rating > 0)
                rating = "+"+rating;
            return rating;
        },
    },
    props: {
        post: Object
    },
    mounted() {
        $(".button-like").hover(function(){
            
        })
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
.tooltip{
    position: relative;
}
.tooltip h2{
    position: absolute;
    text-align: center;
    right: -8px;
    border-radius: 3px;
    width: 4rem;
    color: white;

    opacity: 0;
    bottom: 24px;
    transition: .2s;
    background-color:rgba(126, 126, 126, 0.9);
    box-shadow: 2px 2px 4px #ccc;
}
.button-like:hover{
    background-color: #e6f5ff;
}
.tooltip:hover{
    transition: .2s;
}
.tooltip:hover h2{
    transition: .2s;
    opacity: 1;
    bottom: 34px;
}
.tooltip h2::after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(126, 126, 126, 0.9) transparent transparent transparent;
}
.button-dislike:hover{
    background-color: #ffe7e7;
}
</style>