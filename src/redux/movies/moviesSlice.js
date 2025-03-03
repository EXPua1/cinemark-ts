import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTrendingMovies,
  getTopMoviesByMonth,
  getTopMoviesByYear,
  getTrendingShows,
  searchVideo,
  searchTvVideo,
} from './operations';
import { BCKGRND_URL } from '../../constants/const';
import { getDetails } from '../../utils/api';

// Запрос трендовых фильмов за день
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
export const fetchTvWeek = createAsyncThunk('tv/fetchTvWeek', async () => {
  const data = await getTrendingShows('week');
  return data;
});

// Запрос топовых фильмов за текущий месяц
export const fetchMoviesMonth = createAsyncThunk(
  'movies/fetchMoviesMonth',
  async () => {
    const data = await getTopMoviesByMonth(); // Используем текущий месяц автоматически
    return data;
  }
);

// Запрос топовых фильмов за текущий год
export const fetchMoviesYear = createAsyncThunk(
  'movies/fetchMoviesYear',
  async () => {
    const data = await getTopMoviesByYear(); // Используем текущий год автоматически
    return data;
  }
);

export const fetchMovieTrailer = createAsyncThunk(
  'movies/fetchTrailer',
  async id => {
    const data = await searchVideo(id);
    return data;
  }
);

export const fetchTvTrailer = createAsyncThunk('tv/fetchTrailer', async id => {
  const data = await searchTvVideo(id);
  return data;
});

// Запит бекграунд-зображення фільму/серіалу
export const fetchMovieBackground = createAsyncThunk(
  'movies/fetchBackground',
  async ({ type, id }) => {
    const data = await getDetails(type, id);
    return data.backdrop_path ? `${BCKGRND_URL}${data.backdrop_path}` : null;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    films: [], // Тренды за день
    weeklyFilms: [], // Тренды за неделю
    weeklyShows: [],
    trailers: [], // Трейлеры
    tvTrailers: [],
    monthlyFilms: [], // Тренды за месяц
    yearlyFilms: [], // Тренды за год
    backgroundImage: null,
    loading: false, 
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Тренды за день
      .addCase(fetchMoviesDay.pending, state => {
         state.loading = true;
      })
      .addCase(fetchMoviesDay.fulfilled, (state, action) => {
        state.status = false
        state.films = action.payload;
      })
      .addCase(fetchMoviesDay.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      })

      // Трейлеры фильмов
      .addCase(fetchMovieTrailer.pending, state => {
         state.loading = true;
      })
      .addCase(fetchMovieTrailer.fulfilled, (state, action) => {
       state.status = false;
        state.trailers = action.payload;
      })
      .addCase(fetchMovieTrailer.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message;
      })

      // Трейлеры сериалов
      .addCase(fetchTvTrailer.pending, state => {
         state.loading = true;
      })
      .addCase(fetchTvTrailer.fulfilled, (state, action) => {
        state.status = false;
        state.tvTrailers = action.payload;
        console.log(state.tvTrailers);
      })
      .addCase(fetchTvTrailer.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message;
      })

      // Тренды за неделю
      .addCase(fetchMoviesWeek.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMoviesWeek.fulfilled, (state, action) => {
        state.status = false;
        state.weeklyFilms = action.payload.sort(
          (a, b) => b.vote_average - a.vote_average
        );
      })
      .addCase(fetchMoviesWeek.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
      })
      // Тренды за неделю Shows
      .addCase(fetchTvWeek.pending, state => {
         state.loading = true;
      })
      .addCase(fetchTvWeek.fulfilled, (state, action) => {
        state.status = false;
        state.weeklyShows = action.payload.sort(
          (a, b) => b.vote_average - a.vote_average
        );
      })
      .addCase(fetchTvWeek.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message;
      })

      // Топ фильмы за месяц
      .addCase(fetchMoviesMonth.pending, state => {
         state.loading = true;
      })
      .addCase(fetchMoviesMonth.fulfilled, (state, action) => {
       state.status = false;
        state.monthlyFilms = action.payload;
      })
      .addCase(fetchMoviesMonth.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message;
      })

      // Топ фильмы за год
      .addCase(fetchMoviesYear.pending, state => {
         state.loading = true;
      })
      .addCase(fetchMoviesYear.fulfilled, (state, action) => {
        state.status = false;
        state.yearlyFilms = action.payload;
      })
      .addCase(fetchMoviesYear.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Бекграунд-зображення
      .addCase(fetchMovieBackground.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMovieBackground.fulfilled, (state, action) => {
         state.status = false;
        state.backgroundImage = action.payload;
      })
      .addCase(fetchMovieBackground.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
