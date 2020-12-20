import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { path } = rest;
  const isAuthed = useSelector((state) => {
    const { auth } = state.auth;
    return auth;
  });

  if (path.match('/login')) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return isAuthed === false ? (
            <Component {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: '/home',
                state: { from: props.location },
              }}
            />
          );
        }}
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          const { pathname } = location;
          return isAuthed === true ? (
            pathname === '/' ? (
              <Redirect to={{ pathname: '/home' }} />
            ) : (
              <Component {...rest} />
            )
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          );
        }}
      />
    );
  }
}
