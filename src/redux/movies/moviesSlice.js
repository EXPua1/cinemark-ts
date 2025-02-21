import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTrendingMovies,
  getTopMoviesByMonth,
  getTopMoviesByYear,
} from './operations';

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

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    films: [], // Тренды за день
    weeklyFilms: [], // Тренды за неделю
    monthlyFilms: [], // Тренды за месяц
    yearlyFilms: [], // Тренды за год
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Тренды за день
      .addCase(fetchMoviesDay.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesDay.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.films = action.payload;
      })
      .addCase(fetchMoviesDay.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Тренды за неделю
      .addCase(fetchMoviesWeek.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesWeek.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weeklyFilms = action.payload;
      })
      .addCase(fetchMoviesWeek.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Топ фильмы за месяц
      .addCase(fetchMoviesMonth.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesMonth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.monthlyFilms = action.payload;
      })
      .addCase(fetchMoviesMonth.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Топ фильмы за год
      .addCase(fetchMoviesYear.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesYear.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.yearlyFilms = action.payload;
      })
      .addCase(fetchMoviesYear.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
