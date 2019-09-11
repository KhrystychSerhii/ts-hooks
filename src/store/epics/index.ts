import { combineEpics } from 'redux-observable';
import { getUsersEpic, getUserEpic, getReposEpic, getFollowersEpic } from './users';
import { loginEpic } from './auth';
import { searchReposEpic, searchUsersEpic } from './search';

const epics = combineEpics(
    getUsersEpic,
    getUserEpic,
    getReposEpic,
    getFollowersEpic,
    loginEpic,
    searchReposEpic,
    searchUsersEpic
);

export default epics;