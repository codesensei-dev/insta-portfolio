
export default class Link{
    constructor(jsonObject){
        this.id = jsonObject.id;
        this.url = jsonObject.url;
        this.text = jsonObject.text;
        this.thumbnail = jsonObject.thumbnail
    }
}