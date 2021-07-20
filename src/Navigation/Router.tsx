import React from 'react';
import { withRouter } from 'react-router';
import {
    Switch,
    Route,
    } from 'react-router-dom';
import {Login} from '../Routes';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' component={Login} />
        </Switch>
    );
};

export const Router = withRouter(Routes);