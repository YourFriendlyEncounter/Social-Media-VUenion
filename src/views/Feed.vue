<template>
    <div id="feed">
        <PostSection :field="'feed'" />
    </div>
</template>

<script>
import PostSection from '../components/PostSection'

export default {
    components: {
        PostSection
    },
    data(){
        return {
            updateTimer: null
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