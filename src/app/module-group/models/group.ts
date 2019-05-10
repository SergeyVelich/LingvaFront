export class Group {
    id: number;
    name: string;
    date: Date;
    languageId: number;
    description: string;
    picture: string;

    constructor(id: number, name: string, date: Date, languageId: number, description: string, picture: string){
        this.id = id;
        this.name = name;
        this.date = date;
        this.languageId = languageId;
        this.description = description;
        this.picture = picture;
    }
}