import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Routes from './router';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SnackBarMessage from './utils/snackbar.jsx';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <SnackBarMessage />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default hot(module)(App);
