import { GET_PRODUCTS_SUCCESS } from '../types';

const INITIAL_STATE = { data: [], count: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        count: action.payload.count,
        data: action.payload.data,
      };
    }
    default:
      return state;
  }
};
