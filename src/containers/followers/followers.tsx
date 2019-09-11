import * as React from 'react';
import { connect } from 'react-redux';
import {RootState} from "../../store/reducers";
import {bindActionCreators, Dispatch} from "redux";
import actions from "../../store/actions";
import {ActionType} from "typesafe-actions";
import {RouteComponentProps} from "react-router";
import {UserComponent} from "../../components";
import {User} from "../../models";

type Action = ActionType<typeof actions>;

interface IFollowersProps extends RouteComponentProps {
    followers: Array<User>;
    getUser(login: string): void;
    getFollowers(login: string): void;
}

export const Followers: React.FunctionComponent<IFollowersProps> = (props: IFollowersProps) => {
    const { followers, getUser, getFollowers, ...routeProps } = props;
    React.useEffect(() => {
        getFollowers((routeProps.match.params as any).user);
    }, []);

    return (
        <div className="mb-auto container mt-5 pt-3">
            <div className="card-columns">
                {
                    followers.map(follower => <UserComponent key={follower.id} user={follower} {...routeProps} />)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
    followers: state.users.followers
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
    getUser: (login: string) => actions.getUser(login),
    getFollowers: (login: string) => actions.getFollowers(login)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Followers)