export class Group {
    id: number;
    name: string;
    date: Date;
    languageId: number;
    languageName: string;
    description: string;
    imagePath: string;

    constructor(id: number, name: string, date: Date, languageId: number, languageName: string, description: string, imagePath: string) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.languageId = languageId;
        this.languageName = languageName;
        this.description = description;
        this.imagePath = imagePath;
    }
}