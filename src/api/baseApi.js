import axios from 'axios';

const baseApi = () => {
  const defaultOptions = {
    baseURL: `${process.env.REACT_APP_FORUM_BRANDS_SHELTER_API_URL}/api/v1`,
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  return instance;
};

export default baseApi();
