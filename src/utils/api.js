import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(config => {
  config.params = { ...config.params, api_key: API_KEY };
  return config;
});

export const getTrendingMovies = async (timeWindow = 'day') => {
  const { data } = await axios.get(`/trending/movie/${timeWindow}`);
  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get('/search/multi', {
    params: {
      query,
    },
  });
  return data.results;
};

// Отримати деталі фільму за ID
export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};
