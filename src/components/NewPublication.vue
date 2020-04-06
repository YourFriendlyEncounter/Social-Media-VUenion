<template>
    <form id="form-new-post" @submit.prevent="newPost">
        <textarea class="input-text" 
        id="new-post-text" 
        rows="3" maxlength="3000" 
        :placeholder="placeholder" 
        v-model="newPostText"/>
        <div style="display: flex; justify-content: space-between; width: -webkit-fill-available;">
            <div>
                <input 
                type="file" 
                ref="file" 
                class="input-text" 
                id="new-post-images" 
                accept="image/jpeg,image/jpg,image/png,image/gif" 
                multiple
                @change="handleFileUpload()">
            </div>
            <input type="submit" id="new-post-submit" class="custom-button">
        </div>
    </form>
</template>

<script>
import Message from 'vue-m-message';

export default {
    props: {
        placeholder: String,
        field: String,
    },
    computed: {
        
    },
    methods: {
        handleFileUpload() {
            this.newPostImages = this.$refs.file.files;
        },
        newPost(){
            if (this.newPostText.length < 3){
                Message.error("Нельзя опубликовать пост, длиной менее 3 символов.")
                return;
            }
            if(this.newPostImages.length > 10) {
                Message.error("Нельзя опубликовать более 10 картинок в одном посте.")
                return;
            }
            let newPost = {}
            newPost.text = this.newPostText;
            newPost.dateTimeAdded = (new Date()).toString();
            newPost.images = this.newPostImages.length > 0;
            newPost.edited = false;
            newPost.liked = [];
            newPost.disliked = [];
            newPost.user = this.$store.getters.user.id;
            newPost.type = "post";
            newPost.target = this.field;
            newPost.field = this.field;

            this.$store.dispatch('newPost', newPost)
                .then((key) => {
                    this.sumbitStatus = "ok";
                    if(newPost.images){
                        for(let i = 0; i < this.newPostImages.length; i++){
                            let link = "posts/" + key + "/" + i;
                            let file = this.newPostImages[i]
                            let id = key
                            this.$store.dispatch('sendFile', {link, file, id})
                        }
                    }
                    this.newPostText = ""
                    this.newPostImages = []
                })
                .catch(err => {
                    this.sumbitStatus = err.message
                })
        },
    },
    data() {
        return{
            newPostText: "",
            newPostImages: [],
        }
    }
}
</script>

<style scoped>
#form-new-post{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
#new-post-text{
    width: 100%;
    resize: none;
    height: auto;
}
#new-post-submit{
    margin: 0.4rem 0;
}
#new-post-images{
    margin: 0.4rem 0;
}
</style>