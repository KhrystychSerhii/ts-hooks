import * as React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom'
import { get } from 'lodash';

interface IHeaderProps extends RouteComponentProps {

}

export const HeaderComponent: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  const { history, location } = props;
  const [searchBy, setSearchBy] = React.useState('');

  React.useEffect(() => {
    const by: string = get(location, 'pathname', '');
    if (by && by.indexOf('/search/') === 0) {
      setSearchBy(by.replace('/search/', ''));
    }
  }, []);

  const search = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (searchBy) {
      history.push(`/search/${searchBy}`);
    } else {
      history.push('/');
    }

  };
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={{zIndex: 10}}>
        <div className="container">
          <Link className="navbar-brand" to={'/'}>TS, RX, Hooks</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={search}>
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={searchBy} onChange={e => setSearchBy(e.target.value)} />
            </form>
          </div>
        </div>

      </nav>
  )
};