<template>
    <div class="post-section">
        <NewPublication 
        v-if="checkUser"
        :placeholder="'Что интересного можете рассказать?'" 
        :field="field"/>
        <div class="target-publications" 
        v-if="!isLoading">
            <Publication 
            v-for="post in getPosts" 
            :key="post.id" 
            :post="post" />
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
    },
    data() {
        return {
            updateTimer: null
        }
    },
    created() {
        this.loadEverything();
    },
    beforeDestroy() {
        clearInterval(this.updateTimer)
    },
    mounted() {
        this.updateTimer = setInterval(() => { this.$store.dispatch('updatePosts', {field: this.field}); console.log("Данные подгружены...") }, 10000)
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
        getUserAvatarImageURLs() {
            return this.$store.getters.getLoadedUserAvatarURLs;
        }
    },
    methods: {
        async loadPosts() {
            await this.$store.dispatch('loadPosts', {field: this.field});
        },
        loadUserAvatars() {
            this.$store.dispatch('loadUserAvatarURLs', {posts: this.getPosts})
        },
        loadPostImages() {
            this.$store.dispatch('loadPostImagesURLs', {posts: this.getPosts})
        },
        loadEverything() {
            this.loadPosts().then(() => {
                if(this.getUserAvatarImageURLs.length == 0){
                    this.loadUserAvatars(); 
                    this.loadPostImages();
                }
            });
        }
    },
}
</script>