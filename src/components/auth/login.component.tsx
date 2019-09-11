import * as React from 'react';
import { Formik, FormikProps, Form, Field } from 'formik';
import { loginValidationSchema } from '../../helpers';
import { LoggedInUserRequest } from '../../models';

interface ILoginProps {
    onSubmit(user: LoggedInUserRequest): void
}

export const LoginComponent: React.FunctionComponent<ILoginProps> = props => {
    return (
        <Formik
            initialValues={new LoggedInUserRequest()}
            validationSchema={loginValidationSchema}
            onSubmit={props.onSubmit}
            render={(formProps: FormikProps<LoggedInUserRequest>) => (
                <Form className="w-50 p-4 bg-light">
                    <h4 className="text-center mb-2">
                        Login
                    </h4>
                    <Field
                        validateOnBlur
                        validateOnChange
                        name="username"
                        type="text"
                        render={() => (
                            <div className="form-group row">
                                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                                <div className="col-sm-10">
                                    <input
                                        name="username"
                                        id="username"
                                        type="text"
                                        className="form-control"
                                        onChange={formProps.handleChange}
                                        onBlur={formProps.handleBlur}
                                    />
                                </div>
                            </div>
                        )}
                    />
                    <Field
                        validateOnBlur
                        validateOnChange
                        name="password"
                        type="password"
                        render={() => (
                            <div className="form-group row">
                                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input
                                        name="password"
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        onChange={formProps.handleChange}
                                        onBlur={formProps.handleBlur}
                                    />
                                </div>
                            </div>
                        )}
                    />
                    <button type="submit" className="btn btn-primary w-100" disabled={!formProps.isValid}>
                        Submit
                    </button>
                </Form>
            )}
        >
        </Formik>
    )
};