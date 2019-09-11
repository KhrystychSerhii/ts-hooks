import * as React from 'react';
import { ActionType } from "typesafe-actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from  'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { get } from 'lodash';

import {AuthType, LoggedInUserRequest} from '../../models';

import actions from "../../store/actions";

import {RootState} from "../../store/reducers";

import { LoginComponent, SignUpComponent } from '../../components';

type Action = ActionType<typeof actions>;

export const Auth: React.FunctionComponent<IAuthProps> = (props: IAuthProps) => {
    const authType: AuthType = get(props, 'match.params.authType', 'login');
    return (
        <div className="d-flex h-100 w-100 flex-column justify-content-center align-items-center">
            {(() => {
                switch (authType) {
                    case 'login':
                        return <LoginComponent onSubmit={props.login} />;
                    case 'signup':
                        return <SignUpComponent />;
                }
            })()}
        </div>
    )
};

interface IAuthProps extends RouteComponentProps {
    authType: AuthType;
    login(user: LoggedInUserRequest): void;
}

const mapStateToProps = (state: RootState) => ({ });
const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
    login: (user: LoggedInUserRequest) => actions.login(user)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth)