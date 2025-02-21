

import { useDispatch, useSelector } from "react-redux";
import GenresList from "../../components/GenresList/GenresList";
import Hero from "../../components/Hero/Hero";
import Rating from "../../components/Rating/Rating";
import Section from "../../components/Section/Section";
import Container from "../../components/Сontainer/Container";
import { fetchMoviesMonth, fetchMoviesWeek, fetchMoviesYear } from "../../redux/movies/moviesSlice";
import { useEffect } from "react";
import { selectMonthlyMovies, selectWeeklyMovies, selectYearlyMovies } from "../../redux/movies/selectors";



const HomePage = () => {
  const weeklyFilm = useSelector(selectWeeklyMovies);
  const monthFilm = useSelector(selectMonthlyMovies);
  const yearFilm = useSelector(selectYearlyMovies);



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMoviesWeek());
    dispatch(fetchMoviesMonth());
    dispatch(fetchMoviesYear());

  }, [dispatch]);


  return (
    <>

      <Hero />
      {/* <HeroList films={films} /> */}
      <Section>
        <Container>
          <GenresList />

          <Rating title={"Top 10 movies of the week"} films={weeklyFilm} />
          <Rating title={"Top 10 movies of month"} films={monthFilm} />
          <Rating title={"Top 10 movies of the year"} films={yearFilm} />


        </Container>

      </Section>


    </>
  )
};

export default HomePage;
