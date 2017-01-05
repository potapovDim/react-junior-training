import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import Root from './containers/Root'
import Main from './containers/Main'
import EnterDataComponent from './containers/EntryData'


export default (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <Route path="/main" component={Main} />
      <Route path="/entries" component={EnterDataComponent} />
    </Route>
  </Router>
)