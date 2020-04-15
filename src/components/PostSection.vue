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
            :postID="post.id" 
            :canDelete="canDelete"
            :allowCommentsOnWall="allowCommentsOnWall"/>
        </div>
        <button class="custom-button" @click="loadNewPage">Загрузить ещё</button>
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
            page: 0,
            itemsPerPage: 15,
        }
    },
    async created() {
        this.$store.commit('clearPost')
        if(this.getPosts.length != 0){
            return;
        }
        this.loadEverything();

        window.onscroll = () => {
            this.infiniteScroll()
        }
    },
    computed: {
        checkUser() {
            return this.$store.getters.checkUser
        },
        getPosts() {
            return this.$store.getters.getPosts.slice().filter(p => p.field == this.field && p.type != "comment").reverse()
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
                this.loadNewPage();
            }
        },
        getAuthorById(id){
            return this.$store.getters.getUserById(id)
        },
        loadEverything() {
            this.$store.dispatch('loadPosts', {field: this.field, page: this.page, itemsPerPage: this.itemsPerPage});
        },
    },
}
</script>