import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import LoginForm from './components/LoginForm';
import Dashboard from './components/dashboard/DashBoard';
import NewVoyage from './components/NewVoyage/NewVoyage';
import NoMatch from './components/NoMatch';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginForm} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="voyages/new" component={NewVoyage} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  );
};

export default Routes;
