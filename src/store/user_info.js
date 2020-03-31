export default class UserInfo {
    constructor(id, name, lastName, birthDate, image = null, about = ""){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.image = image;
        this.about = about;
    }
}