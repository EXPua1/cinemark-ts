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

export const searchMulti = async query => {
  const { data } = await axios.get('/search/multi', {
    params: {
      query,
    },
  });
  return data.results;
};

// Отримати деталі фільму за ID
export const getDetails = async (type, id) => {
  const { data } = await axios.get(`/${type}/${id}`);
  return data;
};

// Отримання вікової категорії
export const getReleaseDates = async id => {
  const { data } = await axios.get(`/movie/${id}/release_dates`);
  return data;
};

export const getContentRatings = async id => {
  const { data } = await axios.get(`/tv/${id}/content_ratings`);
  return data;
};

// Отримати список акторів за ID
export const getCredits = async (type, id) => {
  const { data } = await axios.get(`/${type}/${id}/credits`);
  return data;
};
