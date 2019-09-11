export type AuthType = 'login' | 'signup';

interface ILoggedInUserRequest {
    username: string;
    password: string;
}
export class LoggedInUserRequest implements ILoggedInUserRequest {
    constructor(
        public username: string = '',
        public password: string = ''
    ) {}
}
interface ILoggedInUserResponse {

}
export class LoggedInUserResponse implements ILoggedInUserResponse {

}

interface ILoggedInUserError {

}
export class LoggedInUserError implements ILoggedInUserError {

}

//
export type AuthActionType = '@@auth/login' | '@@auth/login_success' | '@@auth/login_fail';
export type AuthActionPayload = LoggedInUserRequest | LoggedInUserResponse | LoggedInUserError;