import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// Containers
import { Home, User, Repos, Followers, Search, Auth } from './containers';
// Components
import { HeaderComponent, FooterComponent } from './components';

const App: React.FC = () => {
    return (
        <div className="d-flex h-100 w-100 flex-column justify-content-between">
            <Router>
                <div>
                    <Route path="/" component={HeaderComponent} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:user" component={User} />
                        <Route path="/:user/repos" component={Repos} />
                        <Route path="/:user/followers" component={Followers} />
                        <Route path="/search/:by" component={Search} />
                        <Route exact path="/auth/:authType" component={Auth} />
                    </Switch>
                </div>
            </Router>
            <FooterComponent />
        </div>
    );
};

export default App;
