import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../Сontainer/Container';
import SignBtn from '../SignBtn/SignBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';

import css from './Header.module.css';

const Header = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.header_content}>
          <Link className={css.logo} to="/">
            Cinemark
          </Link>
          <nav>
            <ul className={css.nav}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>

              <li>
                <Link to="/tv">TV</Link>
              </li>
              {/* <li>
                <Link to="/test">test</Link>
              </li> */}
            </ul>
          </nav>
          <div className={css.header_actions}>
            {isLargeScreen && <SearchForm />}
            <p className={css.lang}> UA</p>
            <SignBtn />
          </div>
          <BurgerMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
