import { getType, PayloadAction } from 'typesafe-actions';
// Models
import { LoggedInUserResponse, AuthActionType, AuthActionPayload } from '../../models';

// Actions
import * as actions from '../actions/auth';
export type Action = PayloadAction<AuthActionType, AuthActionPayload> //ActionType<typeof actions>;

// type Action = ActionType<PayloadAction<string, any>>;


export interface AuthState {
    readonly loading: boolean;
    readonly user: unknown | LoggedInUserResponse;
    readonly error: null | any;
}

const initialState: AuthState = {
    loading: false,
    user: null,
    error: null
};

export const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
    switch (action.type) {
        case getType(actions.login): {
            return {
                ...state,
                loading: true
            }
        }

        case getType(actions.loginSuccess): {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }

        case getType(actions.loginFail): {
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
}