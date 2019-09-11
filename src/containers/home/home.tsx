import * as React from 'react';
import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from  'react-redux';
import {RouteComponentProps} from "react-router";

import actions from '../../store/actions';

import { RootState } from '../../store/reducers';
import {User} from "../../models";
// Components
import { UserComponent } from '../../components';

type Action = ActionType<typeof actions>;

export const Home: React.FunctionComponent<IHomeProps> = (props: IHomeProps) => {
    const { users, getUsers, ...routeProps } = props;
    React.useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="mb-auto container mt-5 pt-3">
            <div className="card-columns">
                {users.map(user =>
                    <UserComponent key={user.id} user={user} {...routeProps} />
                )}
            </div>
            {
                users.length ? (
                    <div className="d-flex justify-content-center mb-3">
                        <button type="button" className="btn btn-success">Load more</button>
                    </div>
                ) : null
            }
        </div>
    )
};

interface IHomeProps extends RouteComponentProps {
    users: Array<User>;
    getUsers(): void;
}

const mapStateToProps = (state: RootState) => ({
    users: state.users.users
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
    getUsers: () => actions.getUsers()
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);