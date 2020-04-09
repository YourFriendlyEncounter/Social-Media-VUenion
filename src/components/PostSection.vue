<template>
    <div class="post-section">
        <NewPublication 
        v-if="checkUser && allowPosting"
        :placeholder="'Что интересного можете рассказать?'" 
        :field="field"/>
        <div class="target-publications" style="margin-bottom: 2rem;">
            <Publication 
            v-for="post in getPosts" 
            :key="post.id" 
            :post="post" 
            :canDelete="canDelete"
            :allowCommentsOnWall="allowCommentsOnWall"/>
            <button class="custom-button" @click="loadNewPage" v-if="loadedItemsCountLastTime > 0">Загрузить ещё</button>
        </div>
    </div>
</template>

<script>
import Publication from '../components/Publication'
import NewPublication from '../components/NewPublication'

export default {
    components: {
        Publication,
        NewPublication
    },
    props: {
        field: String,
        allowPosting: Boolean,
        allowCommentsOnWall: Boolean,
        canDelete: Boolean,
    },
    data() {
        return {
            imagesAlreadyLoaded: Boolean,
            page: 1,
            itemsPerPage: 5,
            loadedItemsCountLastTime: 1,
        }
    },
    async created() {
        if(this.getPosts.length != 0){
            return;
        }
        await this.loadEverything();
        while(document.documentElement.getBoundingClientRect().bottom == window.innerHeight && this.loadedItemsCountLastTime != 0){
            this.page++;
            await this.loadEverything();
        }

        this.$store.commit('setInterval', setInterval(async () => { 
            if(!this.isLoading){
                await this.loadEverything(true); 
                console.log("Данные подгружены для " + this.field); 
            }
        }, 5000))

        window.onscroll = () => {
            this.infiniteScroll()
        }
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
        getLoadedUsers() {
            return this.$store.getters.getUserList;
        },
        getUserAvatarImageURLs() {
            return this.$store.getters.getLoadedUserAvatarURLs;
        },
        getLoadedImagesURLs() {
            return this.$store.getters.getLoadedImagesURLs;
        },
        isLoading() {
            return this.$store.getters.loading
        }
    },
    methods: {
        async loadNewPage(){
            this.page++;
            await this.loadEverything();
        },
        infiniteScroll(){
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight
            if(bottomOfWindow){
                this.loadNewPage()
            }
        },
        getAuthorById(id){
            return this.$store.getters.getUserById(id)
        },
        async loadPosts() {
            return await this.$store.dispatch('loadPosts', {field: this.field, page: this.page, itemsPerPage: this.itemsPerPage});
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
        async loadEverything(isUpdating) {
            if(!isUpdating)
                this.loadedItemsCountLastTime = await this.loadPosts();
            else await this.loadPosts();
            if(this.loadedItemsCountLastTime == 0){
                this.finishedLoading = true;
            }
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