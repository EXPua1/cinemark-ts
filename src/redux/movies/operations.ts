import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface FetchTrailerPayload {
  id: string | number;
  type: 'movie' | 'tv';
}

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

export const searchVideo = async (id: number ) => {
  const { data } = await axios.get(`/movie/${id}/videos`);
  return data.results;
};

export const searchTvVideo = async (id : number, season = 1) => {
  const { data } = await axios.get(`/tv/${id}/season/${season}/videos`);
  return data.results;
};


export const fetchTrailer = createAsyncThunk(
  'media/fetchTrailer',
  async ({ id , type }: FetchTrailerPayload, { rejectWithValue }) => {
    try {
      const fetchFunction = type === 'movie' ? searchVideo : searchTvVideo;
      const data = await fetchFunction(id as number);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message); 
      }
      return rejectWithValue('An unknown error occurred'); 
    }
  }
);



export const fetchMoviesDay = createAsyncThunk(
  'movies/fetchMoviesDay',
  async () => {
    const data = await getTrendingMovies('day');
    return data;
  }
);

// Запрос трендовых фильмов за неделю
export const fetchMoviesWeek = createAsyncThunk(
  'movies/fetchMoviesWeek',
  async () => {
    const data = await getTrendingMovies('week');
    return data;
  }
);

// Запрос трендовых сериалов за неделю
export const fetchTvWeek = createAsyncThunk('tv/fetchTvWeek', async () => {
  const data = await getTrendingShows('week');
  return data;
});

// Запрос топовых фильмов за текущий месяц
export const fetchMoviesMonth = createAsyncThunk(
  'movies/fetchMoviesMonth',
  async () => {
    const data = await getTopMoviesByMonth();
    return data;
  }
);

// Запрос топовых фильмов за текущий год
export const fetchMoviesYear = createAsyncThunk(
  'movies/fetchMoviesYear',
  async () => {
    const data = await getTopMoviesByYear();
    return data;
  }
);