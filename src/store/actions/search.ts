import { ActionCreator, createAction } from "typesafe-actions";
import {Repo, User} from "../../models";

// USERS
export const SEARCH_USERS: string = '@@search/search_users';
export const searchUsers = createAction<string, ActionCreator<string>>(
    SEARCH_USERS,
    (resolve) => (q: string) => resolve(q)
);
export const SEARCH_USERS_SUCCESS: string = '@@search/search_users_success';
export const searchUsersSuccess = createAction<string, ActionCreator<string>>(
    SEARCH_USERS_SUCCESS,
    (resolve) => (response: any) => resolve(response.data.items.map((user: any) => new User(user)))
);
export const SEARCH_USERS_FAIL: string = '@@search/search_users_fail';
export const searchUserFail = createAction(
    SEARCH_USERS_FAIL,
    (resolve) => (error: any) => resolve(error)
);

// REPOS
export const SEARCH_REPOS: string = '@@search/search_repos';
export const searchRepos = createAction<string, ActionCreator<string>>(
    SEARCH_REPOS,
    (resolve) => (q: string) => resolve(q)
);
export const SEARCH_REPOS_SUCCESS: string = '@@search/search_repos_success';
export const searchReposSuccess = createAction<string, ActionCreator<string>>(
    SEARCH_REPOS_SUCCESS,
    (resolve) => (response: any) => resolve(response.data.items.map((repo: any) => new Repo(repo)))
);
export const SEARCH_REPOS_FAIL: string = '@@search/search_repos_fail';
export const searchReposFail = createAction<string, ActionCreator<string>>(
    SEARCH_REPOS_FAIL,
    (resolve) => (error: any) => resolve(error)
);