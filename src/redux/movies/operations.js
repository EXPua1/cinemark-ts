import axios from "axios";

export const getTrendingMovies = async (timeWindow = 'day') => {
  const { data } = await axios.get(`/trending/movie/${timeWindow}`);
  return data.results;
};
export const getTrendingShows = async (timeWindow = 'day') => {
  const { data } = await axios.get(`/trending/tv/${timeWindow}`);
  return data.results;
};


const getCurrentYearMonth = () => {
  const date = new Date();
  const year = date.getFullYear(); // Получаем текущий год
  const month = date.getMonth() + 1; // Месяцы начинаются с 0, поэтому прибавляем 1
  return { year, month };
};

export const getTopMoviesByMonth = async () => {
  const { year, month } = getCurrentYearMonth(); // Получаем текущий месяц и год
  const startDate = `${year}-${month.toString().padStart(2, '0')}-01`; // Начало месяца
  const endDate = `${year}-${month.toString().padStart(2, '0')}-31`; // Конец месяца

  const { data } = await axios.get('/discover/movie', {
    params: {
      
      sort_by: 'vote_average.desc',
      'primary_release_date.gte': startDate,
      'primary_release_date.lte': endDate,
    },
  });

  return data.results;
};

export const getTopMoviesByYear = async () => {
  const { year } = getCurrentYearMonth(); // Получаем текущий год

  const { data } = await axios.get('/discover/movie', {
    params: {
     
      sort_by: 'vote_average.desc',
      primary_release_year: year,
    },
  });

  return data.results;
};


export const searchVideo = async (id) => {
    const { data } = await axios.get(`/movie/${id}/videos`);
    return data.results
}