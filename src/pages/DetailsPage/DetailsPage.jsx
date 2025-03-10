import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import clsx from 'clsx';

import Section from '../../components/Section/Section';
import Container from '../../components/Сontainer/Container';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Details from '../../components/Details/Details';
import Background from '../../components/Background/Background';

import { getDetails } from '../../utils/api';

import css from './DetailsPage.module.css';
import { fetchTrailer } from '../../redux/movies/operations';
import { useDispatch } from 'react-redux';

const DetailsPage = () => {
  const [data, setData] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const { type, id } = useParams();
const dispatch = useDispatch();
  const location = useLocation();
  const prevLocation = location.state?.from || '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(null);
        const data = await getDetails(type, id);
        console.log(data)
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id, type]);

  useLayoutEffect(() => {
    dispatch(fetchTrailer({ id, type }));
  }, [dispatch, type, id]);

  // const buildCssClasses = ({ isActive }) =>
  //   clsx(css.link, isActive && css.active);

  return (
    <>
      <Section className={css.sectionDetails}>
        <Background backgroundPath={data?.backdrop_path} />

        <Container className={css.containerDetails}>
          <GoBackBtn state={{ from: prevLocation }} />

          <Details details={data} type={type} />
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
