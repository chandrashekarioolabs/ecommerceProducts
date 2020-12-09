import { combineReducers } from 'redux';
import auth from './auth';
import result from './result';
import products from './products';

const appReducer = combineReducers({
  auth,
  snackBar: result,
  products,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
