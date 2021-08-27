import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Auth } from '../Routes';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/auth" />
      </Route>
      <Route component={Auth} path="/auth" />
    </Switch>
  );
};

export const Router = withRouter(Routes);
