import * as React from 'react';
import {Repo} from "../../models";

interface IRepoProps {
    repo: Repo;
}

export const RepoComponent: React.FunctionComponent<IRepoProps> = (props: IRepoProps) => {
    const { repo } = props;
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title text-capitalize">{repo.name}</h5>
                <p className="card-text">{repo.description}</p>
                <p className="card-text">Language: {repo.language}</p>
                {
                    repo.html_url ? <a href={repo.html_url} className="card-link" target="_blank">Github</a> : null
                }
                {
                    repo.homepage ? <a href={repo.homepage} className="card-link" target="_blank">Homepage</a> : null
                }
            </div>
            <div className="card-footer">
                <small>Created: {repo.created_at}</small>
            </div>
        </div>
    )
};