
export default class SocialLink{
    constructor(jsonObject){
        this.icon = `${process.env.PUBLIC_URL}/users/assets/social/${jsonObject.icon}`;
        this.url = jsonObject.url
    }
}