import Link from './Link'
export default class Group{
    constructor(jsonObject){
        this.id = jsonObject.id;
        this.mainText = jsonObject.mainText;
        this.links = []
        this.image = jsonObject.thumbnail

        jsonObject.links.map(element => {
            this.links.push( new Link(element))
        });
    }
}