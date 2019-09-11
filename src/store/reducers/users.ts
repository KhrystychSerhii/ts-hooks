import {ActionType, getType, PayloadAction} from 'typesafe-actions';

// Models
import {UserError, User, Repo} from '../../models';

// Actions
import * as actions from '../actions/users';

type Action = ActionType<PayloadAction<string, any>>;

export interface UsersState {
    readonly loading: boolean;
    readonly error: null | UserError;
    readonly users: Array<User>;
    readonly repos: Array<Repo>;
    readonly followers: Array<User>;
    readonly user: null | User;
}

const initialState: UsersState = {
    loading: false,
    error: null,
    users: [],
    repos: [],
    followers: [],
    user: null
};

export const usersReducer = (state: UsersState = initialState, action: Action): UsersState => {
    switch (action.type) {
        // USERS
        case getType(actions.getUsers): {
            return {
                ...state,
                loading: true
            }
        }
        case getType(actions.getUsersSuccess): {
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        }
        case getType(actions.getUsersFail): {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }

        // USER
        case getType(actions.getUser): {
            return {
                ...state,
                loading: true
            }
        }
        case getType(actions.getUserSuccess): {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }
        case getType(actions.getUserFail): {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        // REPOS
        case getType(actions.getRepos): {
            return {
                ...state,
                loading: true
            }
        }
        case getType(actions.getReposSuccess): {
            return {
                ...state,
                loading: false,
                repos: action.payload
            }
        }
        case getType(actions.getReposFail): {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        // FOLLOWERS
        case getType(actions.getFollowers): {
            return {
                ...state,
                loading: true
            }
        }
        case getType(actions.getFollowersSuccess): {
            return {
                ...state,
                loading: false,
                followers: action.payload
            }
        }
        case getType(actions.getFollowersFail): {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
};