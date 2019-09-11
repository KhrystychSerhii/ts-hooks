import { object, ObjectSchema, Shape, string } from 'yup';
import { passwordReqExp } from './reg-exps';
import { LoggedInUserRequest } from '../models';

export const loginValidationSchema: ObjectSchema<Shape<LoggedInUserRequest, object>> = object().shape<LoggedInUserRequest>({
    username: string()
        .min(2, 'Username is too short - should be 2 chars minimum.')
        .required('Username required'),
    password: string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(passwordReqExp, 'Password can only contain Latin letters.')
        .required('Password required.')
});