import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Map from '../screens/Map';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/map" component={Map} />
  </Switch>
);

export default Routes;
