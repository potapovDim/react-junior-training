import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import Root from './containers/Root'
import Main from './containers/Main'
import EntryData from './containers/EntryData'

//<IndexRoute component={TestData} />


export default (
  <Router history={browserHistory}>
    <Route component={Root}>
      <Route path="/" component={Main}>
        
        <Route path="/entries" component={EntryData} />
      </Route>
    </Route>
  </Router>
)