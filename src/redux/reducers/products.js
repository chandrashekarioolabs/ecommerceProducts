import {
  ADD_PRODUCT_TO_CART,
  GET_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT_FROM_CART,
} from '../types';

const initialState = { products: [], cartProducts: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducts: action.payload,
      };
    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, cartProducts: action.payload };
    default:
      return state;
  }
};
