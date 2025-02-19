import { Outlet, useParams, useLocation, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import Section from '../../components/Section/Section';
import Container from '../../components/Сontainer/Container';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

// import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const prevLocation = location.state.from;

  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <>
      <Section>
        <Container>
          <GoBackBtn
          //   state={{ from: prevLocation }}
          />
          <MovieDetails
          //   state={{ from: prevLocation }}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <h3
          //   className={css.addTitle}
          >
            Discover
          </h3>
          <NavLink
            to={`/movies/${movieId}/comments`}
            state={{ from: prevLocation }}
            className={buildCssClasses}
          >
            Comments
          </NavLink>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: prevLocation }}
            className={buildCssClasses}
          >
            Reviews
          </NavLink>
          <NavLink
            to={`/movies/${movieId}/photos`}
            state={{ from: prevLocation }}
            className={buildCssClasses}
          >
            Photos
          </NavLink>
        </Container>
      </Section>
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};

export default MovieDetailsPage;
