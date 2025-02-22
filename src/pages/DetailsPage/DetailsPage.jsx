import { useParams, useLocation } from 'react-router-dom';
// import clsx from 'clsx';

import Section from '../../components/Section/Section';
import Container from '../../components/Сontainer/Container';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Details from '../../components/Details/Details';
import { useEffect } from 'react';
import { fetchMovieTrailer } from '../../redux/movies/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrailers } from '../../redux/movies/selectors';
import Video from '../../components/Video/Video';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const trailers = useSelector(selectTrailers);
  const videoKey = trailers?.find(t => t.site === "YouTube" && t.type === "Trailer")?.key || '';
  const { type, id } = useParams();
  // console.log({ type });

  const location = useLocation();
  const prevLocation = location.state?.from || '/';
  // console.log(location);

  // const buildCssClasses = ({ isActive }) =>
  //   clsx(css.link, isActive && css.active);
  useEffect(() => {
    dispatch(fetchMovieTrailer(id))

  }, []);



  return (
    <>
      <Section>
        <Container>
          <GoBackBtn state={{ from: prevLocation }} />
          {/* <Details state={{ from: prevLocation }} /> */}
          <Video videoKey={videoKey} />
          <Details />
        </Container>
      </Section>

      <Section>
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
