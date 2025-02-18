// Header.js
import { Link } from 'react-router-dom';

import Container from '../Сontainer/Container';
import SignBtn from '../SignBtn/SignBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import css from './Header.module.css';

const Header = () => {
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
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          <div className={css.header_actions}>
            <p className={css.form_search}>Form search</p>
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
