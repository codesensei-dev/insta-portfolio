import Group from "./Group";
import SocialLink from "./SocialLink";

export default class User{
    constructor(jsonObject){
        this.id = jsonObject.id;
        this.name = jsonObject.name;
        this.userId = jsonObject.userId;
        this.description = jsonObject.description;
        this.image = `${process.env.PUBLIC_URL}/users/assets/main/${jsonObject.image}`;

        this.socialLinks = jsonObject.socialLinks.map((socialLink)=>{
          return new SocialLink(socialLink);
        });

        this.groups = jsonObject.groups.map((group) => {
          return new Group(group);
        });
    }
}

