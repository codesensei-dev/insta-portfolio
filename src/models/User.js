import Group from "./Group";

export default class User{
    constructor(jsonObject){
        this.id = jsonObject.id;
        this.name = jsonObject.name;
        this.description = jsonObject.description;
        this.groups = []
        this.image = `${process.env.PUBLIC_URL}/users/assets/main/${jsonObject.image}`;
        jsonObject.groups.map((element) => {
          this.groups.push(new Group(element));
        });
    }
}

