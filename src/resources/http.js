import axios from 'axios';

const http = axios.create({
  baseURL: 'https://cyberminds-backend.herokuapp.com/api/',
  Headers: {},
});

try {
  http.interceptors.request.use(
    (config) => {
      let data = JSON.parse(localStorage.getItem('cyber-minds'));

      if (data && data.user_status.token) {
        config.headers['Authorization'] = 'Token ' + data.user_status.token;
      }

      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}

export default http;
