import * as React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {RouteComponentProps} from 'react-router';
import {RootState} from "../../store/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {ActionType} from "typesafe-actions";
import actions from "../../store/actions";



type Action = ActionType<typeof actions>;

interface IUserProps extends RouteComponentProps {
    user: any;
    getUser(login: string): void;
}
// avatar_url: "https://avatars2.githubusercontent.com/u/31?v=4"
// bio: null
// blog: "tomtenthij.nl"
// company: "Freelance"
// created_at: "2008-01-15T15:44:31Z"
// email: null
// events_url: "https://api.github.com/users/tomtt/events{/privacy}"
// followers: 32
// followers_url: "https://api.github.com/users/tomtt/followers"
// following: 12
// following_url: "https://api.github.com/users/tomtt/following{/other_user}"
// gists_url: "https://api.github.com/users/tomtt/gists{/gist_id}"
// gravatar_id: ""
// hireable: true
// html_url: "https://github.com/tomtt"
// id: 31
// location: "Amsterdam"
// login: "tomtt"
// name: "Tom ten Thij"
// node_id: "MDQ6VXNlcjMx"
// organizations_url: "https://api.github.com/users/tomtt/orgs"
// public_gists: 241
// public_repos: 72
// received_events_url: "https://api.github.com/users/tomtt/received_events"
// repos_url: "https://api.github.com/users/tomtt/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/tomtt/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/tomtt/subscriptions"
// type: "User"
// updated_at: "2019-09-09T09:50:27Z"
// url: "https://api.github.com/users/tomtt"
export const User: React.FunctionComponent<IUserProps> = (props: IUserProps) => {
    const { match, user } = props;

    React.useEffect(() => {
        props.getUser((match.params as any).user);
    }, []);

    return (
      <div className="mb-auto container mt-5 pt-3">
          {
              user ?
                  <div className="card mb-3">
                      <div className="row no-gutters">
                          <div className="col-md-4">
                              <img src={user.avatar_url} className="card-img" alt="..." />
                          </div>
                          <div className="col-md-8">
                              <div className="card-body d-flex flex-column h-100">
                                  <h5 className="card-title">{user.name}</h5>
                                  <div className="row">
                                      <div className="col-3">Created At</div>
                                      <div className="col-9">
                                          <p className="card-text">{user.created_at}</p>
                                      </div>
                                  </div>
                                  {
                                      user.company &&
                                      <div className="row">
                                          <div className="col-3">Company</div>
                                          <div className="col-9">
                                              <p className="card-text">{user.company}</p>
                                          </div>
                                      </div>
                                  }
                                  {
                                      user.location &&
                                      <div className="row">
                                          <div className="col-3">Location</div>
                                          <div className="col-9">
                                              <p className="card-text">{user.location}</p>
                                          </div>
                                      </div>
                                  }
                                  <div className="row">
                                      <div className="col-3">Followers</div>
                                      <div className="col-9">
                                          <Link className="card-text" to={`/${user.login}/followers`}>{user.followers}</Link>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-3">Repos</div>
                                      <div className="col-9">
                                          <Link className="card-link" to={`/${user.login}/repos`}>{user.public_repos}</Link>
                                      </div>
                                  </div>
                                  {
                                      user.blog &&
                                      <div className="row">
                                          <div className="col-3">Blog</div>
                                          <div className="col-9">
                                              <a className="card-link" href={user.blog} target="_blank">{user.blog}</a>
                                          </div>
                                      </div>
                                  }

                                  <div className="mt-auto">
                                      <p className="card-text">
                                          <small className="text-muted">Last updated {user.updated_at}</small>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> : null
          }
      </div>
  )
};

const mapStateToProps = (state: RootState) => ({
    user: state.users.user
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
    getUser: (login: string) => actions.getUser(login)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);