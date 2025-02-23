import { createSelector } from '@reduxjs/toolkit';

export const selectMovies = state => state.movies.films;
export const selectMoviesLoading = state => state.movies.loading;
export const selectMoviesError = state => state.movies.error;

export const selectWeeklyMovies = state => state.movies.weeklyFilms;
export const selectMonthlyMovies = state => state.movies.monthlyFilms;
export const selectYearlyMovies = state => state.movies.yearlyFilms;
export const selectWeeklyShows = state => state.movies.weeklyShows;

export const selectTrailers = state => state.movies.trailers;
export const selectTvTrailers = state => state.movies.tvTrailers;

export const selectFilteredTrailers = createSelector(
  [selectTrailers, selectTvTrailers],
  (trailers, tvTrailers) => {
    const tvVideoKey = tvTrailers?.find(t => t.site === 'YouTube')?.key || '';
    const videoKey =
      trailers?.find(t => t.site === 'YouTube' && t.type === 'Trailer')?.key ||
      '';

    return { tvVideoKey, videoKey };
  }
);

export const selectBackgroundImage = state => state.movies.backgroundImage;
