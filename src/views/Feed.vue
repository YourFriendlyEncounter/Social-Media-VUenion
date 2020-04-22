<template>
    <div id="feed">
        <PostSection :field="'feed'" :allowPosting="isUserAdmin || idPublishingAllowed" :allowCommentsOnWall="true" />
    </div>
</template>

<script>
import PostSection from '../components/PostSection'

export default {
    components: {
        PostSection
    },
    computed: {
        isUserAdmin() {
            let userInfo = this.$store.getters.getUserInfo;
            if(!userInfo){
                return false
            }
            else return userInfo.isAdmin
        },
        idPublishingAllowed() {
            return this.$store.getters.getFeedPublishing
        }
    },
    data(){
        return {
            updateTimer: null,
        }
    },
}
</script>

<style scoped>
#feed{
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
}
</style>