import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import clsx from 'clsx';

import Section from '../../components/Section/Section';
import Container from '../../components/Сontainer/Container';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Details from '../../components/Details/Details';

import { fetchMovieBackground } from '../../redux/movies/moviesSlice';

import css from './DetailsPage.module.css';

const DetailsPage = () => {
  // const { type, id } = useParams();
  // console.log({ type });
  const dispatch = useDispatch();
  const location = useLocation();
  const prevLocation = location.state?.from || '/';

  const [type, id] = location.pathname.split('/').slice(-2);

  const backgroundImage = useSelector(state => state.movies.backgroundImage);
  console.log(backgroundImage);

  useEffect(() => {
    dispatch(fetchMovieBackground({ type, id }));
  }, [dispatch, type, id]);

  // const buildCssClasses = ({ isActive }) =>
  //   clsx(css.link, isActive && css.active);

  return (
    <>
      <Section className={css.sectionDetails}>
        <div
          className={css.background}
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : 'none',
          }}
        />
        <Container className={css.containerDetails}>
          <GoBackBtn state={{ from: prevLocation }} />
          <Details />
        </Container>
      </Section>

      <Section className={css.sectionDiscover}>
        <Container>
          <h3
          //   className={css.addTitle}
          >
            Discover
          </h3>
          {/* <NavLink
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
          </NavLink>*/}
        </Container>
      </Section>
      {/* <Section>
        <Container>
          <Outlet />
        </Container>
      </Section> */}
    </>
  );
};

export default DetailsPage;
