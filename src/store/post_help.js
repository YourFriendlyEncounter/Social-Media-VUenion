export default class Post {
    constructor(
        text,
        dateTimeAdded,
        images,
        edited,
        liked,
        disliked,
        user = null,
        id = null,
    ) {
        this.text = text;
        this.dateTimeAdded = dateTimeAdded;
        this.images = images;
        this.edited = edited;
        this.liked = liked;
        this.disliked = disliked;
        this.user = user;
        this.id = id;
    }
}