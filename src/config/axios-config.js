import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Aca hay que parsear el token ya que le hacemos un stringify al guardarlo en el localstorage
      const parsedtoken = JSON.parse(token);

      config.headers['auth-token'] = parsedtoken;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;