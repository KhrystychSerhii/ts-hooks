import { combineReducers } from 'redux';

// State, Reducers
import { UsersState, usersReducer } from "./users";
import { AuthState, authReducer } from "./auth";
import { SearchState, searchReducer } from "./search";

export type RootState = {
    users: UsersState,
    auth: AuthState,
    search: SearchState,
};

const reducers = combineReducers({
    users: usersReducer,
    auth: authReducer,
    search: searchReducer
});

export default reducers;