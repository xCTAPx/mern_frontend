import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../Routes';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Login} path="/login" />
    </Switch>
  );
};

export const Router = withRouter(Routes);
