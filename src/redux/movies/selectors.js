export const selectMovies = state => state.movies.films;
export const selectMoviesLoading = state => state.movies.loading;
export const selectMoviesError = state => state.movies.error;

export const selectWeeklyMovies = state => state.movies.weeklyFilms;
export const selectMonthlyMovies = state => state.movies.monthlyFilms;
export const selectYearlyMovies = state => state.movies.yearlyFilms;
export const selectWeeklyShows = state => state.movies.weeklyShows;

export const selectTrailers = state => state.movies.trailers;
export const selectTvTrailers = state => state.movies.tvTrailers;