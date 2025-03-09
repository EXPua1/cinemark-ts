import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchMoviesDay,
  fetchMoviesWeek,
  fetchMoviesMonth,
  fetchMoviesYear,
  fetchTvWeek,
  fetchTrailer,
} from './operations';

// Запрос трендовых фильмов за день

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    films: [], // Тренды за день
    weeklyFilms: [], // Тренды за неделю
    weeklyShows: [], // Тренды сериалов за неделю
    trailers: [], // Трейлеры фильмов
    tvTrailers: [], // Трейлеры сериалов
    monthlyFilms: [], // Тренды за месяц
    yearlyFilms: [], // Тренды за год
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
        state.loading = false;
        state.films = action.payload;
      })
      .addCase(fetchMoviesDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Универсальный запрос трейлеров
      .addCase(fetchTrailer.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        state.loading = false;
        const { type } = action.meta.arg;
        if (type === 'movie') {
          state.trailers = action.payload;
        } else if (type === 'tv') {
          state.tvTrailers = action.payload;
        }
      })
      .addCase(fetchTrailer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Тренды за неделю (фильмы)
      .addCase(fetchMoviesWeek.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMoviesWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.weeklyFilms = [...action.payload].sort(
          (a, b) => b.vote_average - a.vote_average
        );
      })
      .addCase(fetchMoviesWeek.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Тренды за неделю (сериалы)
      .addCase(fetchTvWeek.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTvWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.weeklyShows = [...action.payload].sort(
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
        state.loading = false;
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
        state.loading = false;
        state.yearlyFilms = action.payload;
      })
      .addCase(fetchMoviesYear.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
