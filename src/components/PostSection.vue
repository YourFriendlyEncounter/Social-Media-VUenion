<template>
    <div class="post-section">
        <NewPublication 
        v-if="checkUser && allowPosting"
        class="post-section-new-publication"
        :placeholder="'Что интересного можете рассказать?'" 
        :field="field"/>
        <div class="target-publications">
            <Publication 
            v-for="post in getPosts" 
            :key="post.id" 
            :postID="post.id" 
            :canDelete="canDelete"
            :field="field"
            :allowCommentsOnWall="allowCommentsOnWall"/>
        </div> 
        <LoadingSmall v-if="isLoading" />
        <button v-if="!isLoading && loadMore" class="custom-button" @click="loadNewPage" style="margin-bottom: 1rem;">Загрузить ещё</button>
    </div>
</template>

<script>
import Publication from '../components/Publication'
import NewPublication from '../components/NewPublication'
import LoadingSmall from '../components/LoadingSmall'

export default {
    components: {
        Publication,
        NewPublication,
        LoadingSmall
    },
    props: {
        field: String,
        allowPosting: Boolean,
        allowCommentsOnWall: Boolean,
        canDelete: Boolean,
    },
    data() {
        return {
            page: 0,
            itemsPerPage: 5,
            loadMore: true
        }
    },
    async created() {
        if(this.getPosts.length != 0){
            this.page = this.getPosts.length / this.itemsPerPage - 1
        }
        await this.loadEverything();

        window.onscroll = () => {
            this.infiniteScroll()
        }
    },
    computed: {
        checkUser() {
            return this.$store.getters.checkUser
        },
        getPosts() {
            return this.$store.getters.getPosts
            .filter(p => p.field == this.field && p.type == "allPosts")
            .sort((p, p2) => new Date(p.dateTimeAdded) - new Date(p2.dateTimeAdded))
        },
        isLoading() {
            return this.$store.getters.isLoadingPosts
        }
    },
    methods: {
        loadNewPage(){
            this.page++;
            if(this.loadMore && !this.isLoading) {
                this.loadEverything();
            }
        },
        infiniteScroll(){
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >=
            document.documentElement.offsetHeight - 400 
            if(bottomOfWindow) {
                this.loadNewPage();
            }
        },
        getAuthorById(id){
            return this.$store.getters.getUserById(id)
        },
        async loadEverything() {
            await this.$store.dispatch('loadPosts', {field: this.field, type: "allPosts", page: this.page, itemsPerPage: this.itemsPerPage});
            const loadRequest = this.page * this.itemsPerPage + this.itemsPerPage;
            const postsToLoad = this.$store.getters.getPostsToLoadOnWallCounter
            this.loadMore = loadRequest < postsToLoad
        },
    },
}
</script>

<style scoped>
.post-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.target-publications {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
}

.post-section-new-publication {
    width: 100%;
}
</style>