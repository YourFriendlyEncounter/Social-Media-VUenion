<template>
    <div class="post-section">
        <NewPublication 
        v-if="checkUser && allowPosting"
        :placeholder="'Что интересного можете рассказать?'" 
        :field="field"/>
        <div class="target-publications" 
        v-if="!isLoading">
            <Publication 
            v-for="post in getPosts" 
            :key="post.id" 
            :post="post" 
            :allowCommentsOnWall="allowCommentsOnWall"/>
        </div>
        <Loading v-else :displayWhatLoading="false" />
    </div>
</template>

<script>
import Publication from '../components/Publication'
import Loading from '../components/Loading'
import NewPublication from '../components/NewPublication'

export default {
    components: {
        Publication,
        Loading,
        NewPublication
    },
    props: {
        field: String,
        allowPosting: Boolean,
        allowCommentsOnWall: Boolean
    },
    data() {
        return {
            imagesAlreadyLoaded: Boolean
        }
    },
    created() {
        this.loadEverything();
    },
    beforeDestroy() {
        this.$store.commit("stopInterval")
    },
    computed: {
        checkUser() {
            return this.$store.getters.checkUser
        },
        getPosts() {
            return this.$store.getters.getPosts.slice().filter(p => p.field == this.field && p.type != "comment").reverse()
        },
        isLoading() {
            return this.$store.getters.getLoadingCurrentUser || this.$store.getters.getLoadingUserInfos || this.$store.getters.isSending || this.$store.getters.isLoadingFiles;
        },
        getLoadedUsers() {
            return this.$store.getters.getUserList;
        },
        getUserAvatarImageURLs() {
            return this.$store.getters.getLoadedUserAvatarURLs;
        },
        getLoadedImagesURLs() {
            return this.$store.getters.getLoadedImagesURLs;
        }
    },
    methods: {
        getAuthorById(id){
            return this.$store.getters.getUserById(id)
        },
        async loadPosts() {
            await this.$store.dispatch('loadPosts', {field: this.field});
        },
        async loadUserInfo(userID) {
            await this.$store.dispatch('loadUserInfo', {userID: userID});
        },
        loadUserAvatar(userToLoadImagesFor) {
            this.$store.dispatch('loadUserAvatarURL', {user: userToLoadImagesFor})
        },
        loadPostImages(postToLoadImagesFor) {
            this.$store.dispatch('loadPostImagesURLs', {post: postToLoadImagesFor})
        },
        async loadEverything() {
            if(this.getPosts.length == 0){
                await this.loadPosts();
                let posts = this.getPosts;
                for(let i = 0; i < posts.length; i++) {
                    if(this.$store.getters.getDeletedUserIDs.includes(posts[i].user) || this.getLoadedUsers.some(u => u.id === posts[i].user)){
                        await this.loadImages(posts[i])
                    }
                    else {
                        await this.loadUserInfo(posts[i].user);
                        await this.loadImages(posts[i])
                    }
                }
            }
            this.$store.commit('setInterval', setInterval(() => { 
                this.loadEverything(); 
                console.log("Данные подгружены для " + this.field); 
            }, 5000))
        },
        loadImages(post) {
            // Если есть не загруженные картинки
            if(post.images == true && !this.getLoadedImagesURLs.some(u => u.id == post.id)){
                this.loadPostImages(post);
            }
            // Если фото профиля ещё не загружено
            if(!this.getUserAvatarImageURLs.some(u => u.id == post.user)) {
                let user = this.getAuthorById(post.user);
                if(user)
                    this.loadUserAvatar(user);
            }
        }
    },
}
</script>