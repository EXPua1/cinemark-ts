import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GenresList from '../../components/GenresList/GenresList';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import Container from '../../components/Сontainer/Container';
import RatingItem from '../../components/Rating/RatingItem/RatingItem';
import Rating from '../../components/Rating/Rating';


import {
  selectMonthlyMovies,
  selectWeeklyMovies,
  selectWeeklyShows,
  selectYearlyMovies,
} from '../../redux/movies/selectors';
import { fetchMoviesDay, fetchMoviesMonth, fetchMoviesWeek, fetchMoviesYear, fetchTvWeek } from '../../redux/movies/operations';

const HomePage = () => {
  const weeklyFilm = useSelector(selectWeeklyMovies);
  const monthFilm = useSelector(selectMonthlyMovies);
  const yearFilm = useSelector(selectYearlyMovies);
  const { films } = useSelector(state => state.movies);
  const tvWeek = useSelector(selectWeeklyShows);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesDay());
    dispatch(fetchMoviesWeek());
    dispatch(fetchMoviesMonth());
    dispatch(fetchMoviesYear());
    dispatch(fetchTvWeek());
  }, [dispatch]);

  return (
    <>
      <Hero films={films} />
    
      <Section>
        <Container>
          <GenresList />
          <Rating>
            <RatingItem
              title={'Top 10 movies of the week'}
              films={weeklyFilm}
            />
            <RatingItem title={'Top 10 Tv Shows of the week'} films={tvWeek} />
            <RatingItem title={'Top 10 movies of the year'} films={yearFilm} />
          </Rating>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
