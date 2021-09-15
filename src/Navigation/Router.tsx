import React from 'react';
import {
  Redirect,
  withRouter,
  Router as RRouter,
} from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { history } from '../utils';
import { Auth, Restore, Home } from '../Routes';

const Routes: React.FC = () => {
  return (
    <RRouter history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
        <Route component={Auth} exact path="/auth" />
        <Route
          component={Restore}
          exact
          path="/restore/:resetToken?"
        />
        <Route component={Home} exact path="/home" />
      </Switch>
    </RRouter>
  );
};

export const Router = withRouter(Routes);
