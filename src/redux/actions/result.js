import { GET_PRODUCTS_SUCCESS } from '../types';
import { getRepository } from '../../api';

export const getRepositoryList = (data) => {
  return (dispatch) => {
    getRepository(data).then((res) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { count: res.data.total_count, data: res.data.items },
      });
    });
  };
};
