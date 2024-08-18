
export default class Link{
    constructor(parentId, jsonObject){
        this.id = parentId;
        this.url = jsonObject.url;
        this.text = jsonObject.text;
        this.thumbnail = `${process.env.PUBLIC_URL}/users/assets/${this.id}/${jsonObject.thumbnail}`
    }
}