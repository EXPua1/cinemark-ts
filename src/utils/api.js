import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
 
const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;


export const getTrendingMovies = async (timeWindow = 'day') => {
  const { data } = await axios.get(`/trending/movie/${timeWindow}`, {
    params: {
      api_key: API_KEY, 
    },
  });
  return data.results; 
};