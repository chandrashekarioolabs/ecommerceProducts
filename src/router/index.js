import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductPage from 'Pages/productPage';
import CartPage from 'Pages/cartPage';
import Login from 'Pages/login';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';

export default function Routes({ ...props }) {
  return (
    <>
      <Switch>
        <PrivateRoute exact path='/' component={ProductPage} />
        <PrivateRoute exact path='/login' component={Login} />
        <PrivateRoute exact path='/home' component={ProductPage} />
        <PrivateRoute exact path='/cart' component={CartPage} />
        <Route path='/404' component={NotFound} />
        <Route path='*' render={() => <Redirect to='/404' />} />
      </Switch>
    </>
  );
}
