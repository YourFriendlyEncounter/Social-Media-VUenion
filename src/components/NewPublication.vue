<template>
    <form id="form-new-post" @submit.prevent="newPost">
        <textarea class="input-text" 
        id="new-post-text" 
        rows="3" maxlength="3000" 
        :placeholder="placeholder" 
        v-model="newPostText"/>
        <div style="display: flex; justify-content: space-between; width: -webkit-fill-available;">
            <div style="display: flex; align-items: center; width: 50%;">
                <button @click.prevent="toggleAttachments" class="button-attachment" tooltip="Прикрепить к посту изображения или видео с youtube">
                    <img 
                     src="../assets/paperclip.png" height="32" alt="Прикрепления">
                </button>
                <div id="new-post-attachments" class="container-white">
                    <input 
                    type="file" 
                    ref="file" 
                    id="new-post-images" 
                    accept="image/jpeg,image/jpg,image/png,image/gif" 
                    multiple
                    @change="handleFileUpload()">
                    <label for="new-post-images"
                    class="button-attachment">
                        <img src="../assets/image.png" height="32" alt="Добавление картинки">
                        <p 
                        class="attachment-message"
                        :class="{ 'red': newPostImages.length > 10, 'gray': newPostImages.length <= 10 }">Добавить изображения... ({{ newPostImages.length }})</p>
                    </label>
                    <div class="simple-flex">
                        <img src="../assets/youtube.png" height="32" style="margin: .2rem;" alt="Youtube-видео">
                        <input 
                        type="text" 
                        id="input-video" 
                        class="input-text" 
                        placeholder="Ссылка на youtube-видео"
                        v-model="newPostVideo">
                    </div>
                </div>
            </div>
            <input type="submit" id="new-post-submit" class="custom-button">
        </div>
    </form>
</template>

<script>
import Message from 'vue-m-message';
import $ from 'jquery'

export default {
    props: {
        placeholder: String,
        field: String,
    },
    computed: {
        
    },
    methods: {
        toggleAttachments() {
            $('#new-post-attachments').slideToggle()
        },
        handleFileUpload() {
            this.newPostImages = this.$refs.file.files;
        },
        newPost(){
            if (this.newPostText.length < 3 && this.newPostImages.length === 0 && this.newPostVideo.length === 0){
                Message.error("Нельзя опубликовать пост, длиной менее 3 символов без картинок и видео.")
                return;
            }
            if(this.newPostImages.length > 10) {
                Message.error("Нельзя опубликовать более 10 картинок в одном посте.")
                $('#new-post-attachments').slideDown()
                return;
            }
            if(this.newPostVideo.length > 0) {
                var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/;
                var match = this.newPostVideo.match(regExp);
                if (!match || match[2].length != 11) {
                    Message.error("Ссылка на видео не соответствует формату youtube. Если вы не хотите добавлять видео, удалите ссылку полностью.")
                    $('#new-post-attachments').slideDown()
                    return;
                }
                this.newPostVideo = match[2];
            }
            let newPost = {}
            newPost.text = this.newPostText;
            newPost.dateTimeAdded = (new Date()).toString();
            newPost.images = this.newPostImages.length;
            newPost.edited = false;
            newPost.liked = [];
            newPost.video = this.newPostVideo;
            newPost.disliked = [];
            newPost.user = this.$store.getters.user.id;
            newPost.target = this.field;
            newPost.field = this.field;

            this.$store.dispatch('newPost', { type: "allPosts", payload: newPost})
                .then((key) => {
                    this.sumbitStatus = "ok";
                    if(newPost.images){
                        for(let i = 0; i < this.newPostImages.length; i++){
                            let link = "posts/" + key + "/" + i;
                            let file = this.newPostImages[i]
                            let id = key
                            this.$store.dispatch('sendFile', {link, file, id, i})
                        }
                    }
                    document.getElementById('new-post-images').value = "";
                    this.newPostText = ""
                    this.newPostImages = []
                    this.newPostVideo = ""
                     this.$refs.file.files = ""
                })
                .catch(err => {
                    this.sumbitStatus = err.message
                })
            $('#new-post-attachments').slideUp()
        },
    },
    data() {
        return{
            newPostText: "",
            newPostImages: [],
            newPostVideo: ""
        }
    }
}
</script>

<style scoped>

.button-attachment {
    background: transparent;
    border: none;
    cursor: pointer;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 2px;
    padding-left: 4px;
}

.button-attachment:hover {
    background: rgb(215, 239, 255);
}

.attachment-message {
    margin-left: 1rem; 
    font-size: 90%; 
}

#form-new-post {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

#new-post-text {
    width: 100%;
    resize: none;
    height: auto;
}

#new-post-submit {
    margin: 0.4rem 0;
}

#new-post-images {
    width: 0;
    visibility: collapse;
    position: absolute;
}

#new-post-attachments {
    display: none;
    position: absolute;
    margin-top: 4rem;
    box-shadow: 0px 0px 4px black;
    z-index: 999;
}

#new-post-attachments input {
    margin: 0.2rem;
}

#new-post-images {
    margin: 0.4rem 0;
}
</style>