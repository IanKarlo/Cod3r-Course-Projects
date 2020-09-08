import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../assets/pages/Home';
import Users from '../assets/pages/Users';

export default () => {
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Redirect from="*" to="/"/>
    </Switch>
  );
}