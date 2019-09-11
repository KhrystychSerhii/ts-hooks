import * as React from 'react';
import './loader.component.css';

interface ILoaderProps {
    loading: boolean;
}

export const LoaderComponent: React.FunctionComponent<ILoaderProps> = (props: ILoaderProps) => {
    const { loading } = props;
    return loading ? <div className="loader"><div /><div /><div /><div /></div> : null
};