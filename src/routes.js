import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import AuthenticationPage from './pages/AuthenticationPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={AuthenticationPage} />
      <Route exact path="/signup" component={AuthenticationPage} />
    </Switch>
  );
};

export default Routes;
