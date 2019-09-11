import {ConvertClass} from "../../helpers";

interface IUserModel {
    id: number;
    name?: string;
    login: string;
    updated_at: string;
    created_at: string;
    company?: string;
    location?: string;
    blog?: string;
    avatar_url: string;
    followers: number;
    public_repos: number;
    other: any;
}

export class User extends ConvertClass implements IUserModel {
    public id: number;
    public name?: string;
    public login: string;
    public updated_at: string;
    public created_at: string;
    public company: string;
    public location: string;
    public blog: string;
    public avatar_url: string;
    public followers: number;
    public public_repos: number;
    public other: any;
    constructor(user: any) {
        super();
        const { id, name, login, company, location, blog, avatar_url, followers, public_repos, updated_at, created_at, ...other } = user;
        this.id = id;
        this.name = name;
        this.login = login;
        this.company = company;
        this.location = location;
        this.blog = this.convertUrl(blog);
        this.avatar_url = avatar_url;
        this.followers = followers;
        this.public_repos = public_repos;
        this.updated_at = this.convertDate(updated_at);
        this.created_at = this.convertDate(created_at);
        this.other = other;
    }
}

interface IUserErrorModel {
    readonly timestamp: number;
    readonly code: number;
    readonly message: string;
}

export class UserError implements IUserErrorModel {
    readonly timestamp: number;
    constructor(
        public code: number,
        public message: string
    ) {
        this.timestamp = new Date().valueOf();
    }
}
