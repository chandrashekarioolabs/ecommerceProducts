import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchRepository from '../pages';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';

export default function Routes({ ...props }) {
  return (
    <>
      <Switch>
        <PrivateRoute exact path='/' component={SearchRepository} />
        <Route path='/404' component={NotFound} />
        <Route path='*' render={() => <Redirect to='/404' />} />
      </Switch>
    </>
  );
}
