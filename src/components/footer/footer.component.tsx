import * as React from 'react';

interface IFooterProps {

}

export const FooterComponent: React.FunctionComponent<IFooterProps> = props => {
    return (
        <footer className="pt-2 pb-2 bg-light">
            <div className="text-center text-muted">Simple Example</div>
        </footer>
    )
};