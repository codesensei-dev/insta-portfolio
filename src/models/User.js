import Group from "./Group";

export default class User{
    constructor(jsonObject){
        this.id = jsonObject.id;
        this.title = jsonObject.title;
        this.description = jsonObject.description;
        this.groups = []
        
        jsonObject.groups.map((element) => {
          this.groups.push(new Group(element));
        });
    }
}

