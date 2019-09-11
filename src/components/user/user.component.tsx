import * as React from 'react';
import {RouteComponentProps} from "react-router";

interface IUserProps extends RouteComponentProps {
    user: any;
}

export const UserComponent: React.FunctionComponent<IUserProps> = (props: IUserProps) => {
    const { user, history } = props;

    return (
        <div className="card">
            <img src={props.user.avatar_url} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <button className="btn btn-primary w-100 mb-2" onClick={() => history.push(`/${user.login}`)}>View Details</button>
            </div>
        </div>
    )
};