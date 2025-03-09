import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import clsx from 'clsx';

import Section from '../../components/Section/Section';
import Container from '../../components/Сontainer/Container';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Details from '../../components/Details/Details';
import Background from '../../components/Background/Background';

import { getDetails } from '../../utils/api';

import css from './DetailsPage.module.css';

const DetailsPage = () => {
  const [data, setData] = useState(null);

  const { type, id } = useParams();

  const location = useLocation();
  const prevLocation = location.state?.from || '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(null);
        const data = await getDetails(type, id);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id, type]);

  // const buildCssClasses = ({ isActive }) =>
  //   clsx(css.link, isActive && css.active);

  return (
    <>
      <Section className={css.sectionDetails}>
        <Background backgroundPath={data?.backdrop_path} />

        <Container className={css.containerDetails}>
          <GoBackBtn state={{ from: prevLocation }} />

          <Details details={data} />
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
