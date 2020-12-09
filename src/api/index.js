import axios from 'axios';
axios.defaults.baseURL = process.env.BASE_URL;
const api = axios.create({});

export const getProducts = () => {
  return api.get('products');
};
