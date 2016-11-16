import React from 'react';

import { Route } from 'react-router'
import App from '../containers/App';
import Arbidue from '../containers/Arbidue'

module.exports = (
  <Route path='/'component={App}>
    <Route path='/arbidoo' component={Arbidue} />
    <Route path='/arbidoo/:size' component={Arbidue} />
  </Route>
)
