export class Group {
    id: number;
    name: string;
    date: Date;
    languageId: number;
    languageName: string;
    description: string;
    picture: string;

    constructor(id: number, name: string, date: Date, languageId: number, languageName: string, description: string, picture: string) {
       debugger;
        this.id = id;
        this.name = name;
        this.date = date;
        this.languageId = languageId;
        this.languageName = languageName;
        this.description = description;
        this.picture = picture;
    }
}