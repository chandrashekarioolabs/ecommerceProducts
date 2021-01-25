import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => <Component {...rest} />} />;
}
