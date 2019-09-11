import { ActionType, getType, PayloadAction } from 'typesafe-actions';

// Models
import { User, Repo } from '../../models';

// Actions
import * as actions from '../actions/search';

type Action = ActionType<PayloadAction<string, any>>

export interface SearchState {
    readonly loading: boolean;
    readonly error: any;
    readonly users: Array<User>;
    readonly repos: Array<Repo>;
}

const initialState: SearchState = {
    loading: false,
    error: null,
    users: [],
    repos: []
};

export const searchReducer = (state: SearchState = initialState, action: Action): SearchState => {
    switch (action.type) {
        // USERS
        case getType(actions.searchUsers): {
            return {
                ...state,
                loading: true
            }
        }
        case getType(actions.searchUsersSuccess): {
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        }
        case getType(actions.searchUserFail): {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        // REPOS
        case getType(actions.searchRepos): {
            return {
                ...state,
                loading: true
            }
        }
        case getType(actions.searchReposSuccess): {
            return {
                ...state,
                loading: false,
                repos: action.payload
            }
        }
        case getType(actions.searchReposFail): {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default:
            return  state;
    }
};