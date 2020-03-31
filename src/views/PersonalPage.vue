<template>
    <div id="personal-page">
        <div id="personal-page-top">
            <div id="personal-page-image">
                <img id="img-avatar" width="200" height="200">
            </div>
            <div id="personal-page-text-info">
                <h2> {{ user.name }} {{ user.lastName }}</h2>
                <p> {{ getAbout }} </p>
            </div>
        </div>
    </div>    
</template>

<script>
import $ from 'jquery';

export default {
    computed: {
        getCurrentPageUser() {
            let author = null;
            Object.keys(this.getAuthors).forEach(key =>{
                const currentAuthor = this.getAuthors[key]
                if(currentAuthor.id == this.id){
                    author = currentAuthor;
                }
            })
            if(author == null)
            {
                return {
                    name: "[Deleted]",
                    lastName: ""
                }
            }
            return author;
        },
        getAuthors() {
            return this.$store.getters.getUserList;
        },
        getAbout() {
            let aboutText = this.user.about;
            if(!aboutText)
                aboutText = "Подробная информация о себе отсутствует."
            return aboutText;
        }
    },
    data() {
        return {
            user: null
        }
    },
    props: {
        id: String
    },
    beforeMount() {
        this.user = this.getCurrentPageUser
        let photo = null//this.user.image;
        if(photo == null)
            $("img#img-avatar").attr("src", "../assets/anonymous.svg");
    }
}
</script>

<style scoped>
p{
    margin: 0.5rem 0;
}
#personal-page{
    width: 100%;
    display: flex;
}
#personal-page-top{
    display:flex;
}
#personal-page-image{
    width: 200px;
    height: 200px;
}
#personal-page-text-info{
    margin: 0.5rem;
    text-align: left;
}
</style>