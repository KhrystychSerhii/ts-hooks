import * as React from 'react';
import { connect } from  'react-redux';
import {RootState} from "../../store/reducers";
import {bindActionCreators, Dispatch} from "redux";
import actions from "../../store/actions";
import {ActionType} from "typesafe-actions";
import {RepoComponent} from "../../components";
import {RouteComponentProps} from "react-router";
import {Repo} from "../../models";

type Action = ActionType<typeof actions>;

interface IRepoProps extends RouteComponentProps {
    repos: Array<Repo>;
    getRepos(login: string): void;
}
export const Repos: React.FunctionComponent<IRepoProps> = (props: IRepoProps) => {
    const { repos, getRepos, ...routeProps } = props;
    React.useEffect(() => {
        getRepos((routeProps.match.params as any).user);
    }, []);

    return (
        <div className="mb-auto container mt-5 pt-3">
            {
                repos.map(repo => <RepoComponent key={repo.id} repo={repo} />)
            }
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    repos: state.users.repos
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
    getRepos: (login: string) => actions.getRepos(login)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repos);