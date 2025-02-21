import { useParams, useLocation } from 'react-router-dom';
// import clsx from 'clsx';

import Section from '../../components/Section/Section';
import Container from '../../components/Сontainer/Container';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Details from '../../components/Details/Details';

const DetailsPage = () => {
  const { type, id } = useParams();
  // console.log({ type });

  const location = useLocation();
  const prevLocation = location.state?.from || '/';
  // console.log(location);

  // const buildCssClasses = ({ isActive }) =>
  //   clsx(css.link, isActive && css.active);

  return (
    <>
      <Section>
        <Container>
          <GoBackBtn state={{ from: prevLocation }} />
          {/* <Details state={{ from: prevLocation }} /> */}
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
