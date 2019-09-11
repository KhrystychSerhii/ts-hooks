import http from './Http';
import {AuthActionPayload} from "../models";

const getUsers = () => {
    return http.get(undefined, '/users');
};

const getUser = (login: string) => {
    return http.get(undefined, `/users/${login}`);
};

const login = (user: AuthActionPayload) => http.get('','/users', {});

const getRepos = (login: string) => http.get(undefined,`/users/${login}/repos`);

const getFollowers = (login: string) => http.get(undefined,`/users/${login}/followers`);

const search = (q: string, what: 'users' | 'repositories') => http.get(undefined, `/search/${what}`, { params: { q }});

export {
    getUsers,
    getUser,
    getRepos,
    getFollowers,
    search,
    login,
}


