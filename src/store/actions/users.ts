import {ActionCreator, createAction} from 'typesafe-actions';
import {UserError, User, Repo}  from '../../models';


// USERS
export const GET_USERS: string = '@@users/get_users';
export const getUsers = createAction<string>(GET_USERS);

export const GET_USERS_SUCCESS: string = '@@users/get_users_success';
export const getUsersSuccess = createAction<string, ActionCreator<string>>(
    GET_USERS_SUCCESS,
    (resolve) => (response: any) => resolve(response.data.map((user: any) => new User(user)))
);

export const GET_USERS_FAIL: string = '@@users/get_users_fail';
export const getUsersFail = createAction<string, ActionCreator<string>>(
    GET_USERS_FAIL,
        (resolve) => (error: any) => resolve(new UserError(error.code, error.message))
);

// USER
export const GET_USER: string = '@@users/get_user';
export const getUser = createAction<string, ActionCreator<string>>(
    GET_USER,
    resolve => (login: string) => resolve(login)
);
export const GET_USER_SUCCESS: string = '@@users/get_user_success';
export const getUserSuccess = createAction<string, ActionCreator<string>>(
    GET_USER_SUCCESS,
    resolve => (response: any) => resolve(new User(response.data))
);
export const GET_USER_FAIL: string = '@@users/get_user_fail';
export const getUserFail = createAction<string, ActionCreator<string>>(
    GET_USER_FAIL,
    resolve => (error: any) => resolve(error)
);

// REPOS
export const GET_REPOS: string = '@@users/get_repos';
export const getRepos = createAction<string, ActionCreator<string>>(
    GET_REPOS,
    resolve => (login: string) => resolve(login)
);

export const GET_REPOS_SUCCESS: string = '@@users/get_repos_success';
export const getReposSuccess = createAction<string, ActionCreator<string>>(
    GET_REPOS_SUCCESS,
    resolve => (response: any) => resolve(response.data.map((repo: any) => new Repo(repo)))
);

export const GET_REPOS_FAIL: string = '@@users/get_repos_fail';
export const getReposFail = createAction<string, ActionCreator<string>>(
    GET_REPOS_FAIL,
    resolve => (error: any) => resolve(error)
);

// FOLLOWERS
export const GET_FOLLOWERS: string = '@@users/get_followers';
export const getFollowers = createAction<string, ActionCreator<string>>(
    GET_FOLLOWERS,
    resolve => (login: string) => resolve(login)
);
export const GET_FOLLOWERS_SUCCESS: string = '@@users/get_followers_success';
export const getFollowersSuccess = createAction<string, ActionCreator<string>>(
    GET_FOLLOWERS_SUCCESS,
    resolve => (response: any) => resolve(response.data.map((user: any) => new User(user)))
);
export const GET_FOLLOWERS_FAIL: string = '@@users/get_followers_fail';
export const getFollowersFail = createAction<string, ActionCreator<string>>(
    GET_FOLLOWERS_FAIL,
    resolve => (error: any) => resolve(error)
);