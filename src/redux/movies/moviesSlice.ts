import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMoviesDay,
  fetchMoviesWeek,
  fetchMoviesMonth,
  fetchMoviesYear,
  fetchTvWeek,
  fetchTrailer,
} from './operations';

// Типы
export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  [key: string]: any;
}

export interface Trailer {
  id: string;
  key: string;
  site: string; // Добавлено
  type?: string; // Добавлено
  [key: string]: any;
}

interface MoviesState {
  films: Movie[];
  weeklyFilms: Movie[];
  weeklyShows: Movie[];
  trailers: Trailer[];
  tvTrailers: Trailer[];
  monthlyFilms: Movie[];
  yearlyFilms: Movie[];
  loading: boolean;
  loadingVideo: boolean;
  error: string | null;
}

const sortByVoteAverage = (a: Movie, b: Movie): number =>
  b.vote_average - a.vote_average;
// Начальное состояние
const initialState: MoviesState = {
  films: [],
  weeklyFilms: [],
  weeklyShows: [],
  trailers: [],
  tvTrailers: [],
  monthlyFilms: [],
  yearlyFilms: [],
  loading: false,
  loadingVideo: false,
  error: null,
};

// Создание слайса
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Тренды за день
      .addCase(fetchMoviesDay.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMoviesDay.fulfilled, (state, action) => {
        state.loading = false;
        state.films = action.payload || [];
      })
      .addCase(fetchMoviesDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      })

      // Универсальный запрос трейлеров
      .addCase(fetchTrailer.pending, state => {
        state.loadingVideo = true;
      })
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        state.loadingVideo = false;
        const { type } = action.meta.arg;
        if (type === 'movie') {
          state.trailers = action.payload || [];
        } else if (type === 'tv') {
          state.tvTrailers = action.payload || [];
        }
      })
      .addCase(fetchTrailer.rejected, (state, action) => {
        state.loadingVideo = false;
        state.error = action.error.message || 'Unknown error';
      })

      // Тренды за неделю (фильмы)
      .addCase(fetchMoviesWeek.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMoviesWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.weeklyFilms = (action.payload || []).sort(sortByVoteAverage);
      })
      .addCase(fetchMoviesWeek.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      })

      // Тренды за неделю (сериалы)
      .addCase(fetchTvWeek.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTvWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.weeklyShows = (action.payload || []).sort(sortByVoteAverage);
      })
      .addCase(fetchTvWeek.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      })

      // Топ фильмы за месяц
      .addCase(fetchMoviesMonth.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMoviesMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.monthlyFilms = action.payload || [];
      })
      .addCase(fetchMoviesMonth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      })

      // Топ фильмы за год
      .addCase(fetchMoviesYear.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMoviesYear.fulfilled, (state, action) => {
        state.loading = false;
        state.yearlyFilms = action.payload || [];
      })
      .addCase(fetchMoviesYear.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default moviesSlice.reducer;