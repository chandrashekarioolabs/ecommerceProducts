import { combineReducers } from 'redux';
import result from './result';

const appReducer = combineReducers({
  result,
});

const rootReducer = (state, action) => {
  if (action.type == 'USER_SIGN_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
