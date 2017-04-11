import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import LoginForm from './components/LoginForm'
import NoMatch from './components/NoMatch'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginForm}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  )
}

export default Routes
