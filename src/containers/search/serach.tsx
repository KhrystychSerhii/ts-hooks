import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ActionType} from 'typesafe-actions';
import { get } from 'lodash';
import {RootState} from '../../store/reducers';

import actions from '../../store/actions';
import {Repo, User} from "../../models";
import {RepoComponent, UserComponent, LoaderComponent} from "../../components";


type Action = ActionType<typeof actions>;

interface ISearchProps extends RouteComponentProps {
    repos: Array<Repo>;
    users: Array<User>;
    loading: boolean;
    searchRepos(q: string): void;
    searchUsers(q: string): void;
}

export const Search: React.FunctionComponent<ISearchProps> = (props: ISearchProps) => {
    const { repos, users, loading, searchRepos, searchUsers, ...routeProps } = props;
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        const q: string = get(props, 'match.params.by', '');
        if (q) {
            searchRepos(q);
            searchUsers(q);
            setText('');
        } else {
            setText('Please, enter search text.')
        }
    }, []);

    return (
        <div className="mb-auto container mt-5 pt-3">
            {
                text ? <p>{text}</p> : null
            }
            <div className="d-flex justify-content-center">
                <LoaderComponent loading={loading} />
            </div>
            {
                !loading && (
                    <div className="mb-4">
                        <h3>Users</h3>
                        <div className="card-columns">
                            {
                                users.map((user: User) => <UserComponent key={user.id} user={user} {...routeProps} />)
                            }
                        </div>
                    </div>
                )
            }
            {
                !loading && (
                    <div className="mb-4">
                        <h3>Repositories</h3>
                        {
                            repos.map((repo: Repo) => <RepoComponent key={repo.id} repo={repo} />)
                        }
                    </div>
                )
            }
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
    repos: state.search.repos,
    users: state.search.users,
    loading: state.search.loading,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
    searchRepos: (q: string) => actions.searchRepos(q),
    searchUsers: (q: string) => actions.searchUsers(q)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);