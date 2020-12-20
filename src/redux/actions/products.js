import {
  ADD_PRODUCT_TO_CART,
  GET_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT_FROM_CART,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../types';
import * as api from '../../api';

export const getProducts = () => {
  return (dispatch) => {
    api
      .getProducts()
      .then((res) => {
        const data = res?.data || [];
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addproductToCart = (item) => {
  return (dispatch) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: item });
  };
};
