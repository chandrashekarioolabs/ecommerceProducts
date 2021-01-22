import axios from 'axios';
axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.headers.common['header'] = process.env.HEADER;
const api = axios.create({});

export const getRepository = (data) => {
  return api.get('search/repositories', {
    params: { accept: 'application/vnd.github.v3+json', ...data },
  });
};
