import {ConvertClass} from "../../helpers";

interface IRepoModel {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url?: string;
    homepage?: string;
    created_at: string;
    other: any;
}

export class Repo extends ConvertClass implements IRepoModel {
    public id: number;
    public name: string;
    public description: string;
    public language: string;
    public html_url: string;
    public homepage: string;
    public created_at: string;
    public other: any;

    constructor(repo: any) {
        super();
        const { id, name, description, language, html_url, homepage, created_at, ...other } = repo;
        this.id = id;
        this.name = name;
        this.description = description;
        this.language = language;
        this.html_url = html_url;
        this.homepage = this.convertUrl(homepage);
        this.created_at = this.convertDate(created_at);
        this.other = other;
    }
}