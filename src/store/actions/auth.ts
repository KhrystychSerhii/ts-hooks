import { ActionCreator, createAction } from 'typesafe-actions';
import { AuthActionType, AuthActionPayload } from '../../models';

export const LOGIN: AuthActionType = '@@auth/login';
export const login = createAction<AuthActionType, ActionCreator<AuthActionType>>(
    LOGIN,
    resolve => (user: AuthActionPayload) => resolve(user)
);

export const LOGIN_SUCCESS: AuthActionType = '@@auth/login_success';
export const loginSuccess = createAction<AuthActionType, ActionCreator<AuthActionType>>(
    LOGIN_SUCCESS,
    (resolve) => (response: AuthActionPayload) => resolve(response)
);

export const LOGIN_FAIL: AuthActionType = '@@auth/login_fail';
export const loginFail = createAction<AuthActionType, ActionCreator<AuthActionType>>(
    LOGIN_FAIL,
    (resolve) => (error: AuthActionPayload) => resolve(error)
);