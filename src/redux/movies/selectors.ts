import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Movie, Trailer } from './moviesSlice'; // Импорт типов из moviesSlice

export const selectMovies = (state: RootState): Movie[] => state.movies.films;
export const selectMoviesLoading = (state: RootState): boolean => state.movies.loading;
export const selectMoviesError = (state: RootState): string | null => state.movies.error;

export const selectWeeklyMovies = (state: RootState): Movie[] => state.movies.weeklyFilms;
export const selectMonthlyMovies = (state: RootState): Movie[] => state.movies.monthlyFilms;
export const selectYearlyMovies = (state: RootState): Movie[] => state.movies.yearlyFilms;
export const selectWeeklyShows = (state: RootState): Movie[] => state.movies.weeklyShows;

export const selectVideoLoading = (state: RootState): boolean => state.movies.loadingVideo;

export const selectTrailers = (state: RootState): Trailer[] => state.movies.trailers;
export const selectTvTrailers = (state: RootState): Trailer[] => state.movies.tvTrailers;

export const selectFilteredTrailers = createSelector(
  [selectTrailers, selectTvTrailers],
  (trailers: Trailer[], tvTrailers: Trailer[]): { tvVideoKey: string; videoKey: string } => {
    const tvVideoKey = tvTrailers?.find(t => t.site === 'YouTube')?.key || '';
    const videoKey =
      trailers?.find(t => t.site === 'YouTube' && t.type === 'Trailer')?.key || '';

    return { tvVideoKey, videoKey };
  }
);

export const selectBackgroundImage = (state: RootState): string | null =>
  state.movies.backgroundImage || null; 