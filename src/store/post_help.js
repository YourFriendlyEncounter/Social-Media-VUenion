export default class Post {
    constructor(
        text,
        dateTimeAdded,
        images,
        edited,
        likes,
        dislikes,
        user = null,
        id = null,
    ) {
        this.text = text;
        this.dateTimeAdded = dateTimeAdded;
        this.images = images;
        this.edited = edited;
        this.likes = likes;
        this.dislikes = dislikes;
        this.user = user;
        this.id = id;
    }
}