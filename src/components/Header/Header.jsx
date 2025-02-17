// Header.js
import { Link } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link to="/">Cinemark</Link>
      </div>
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
        <p>Form search</p>
        <p>UA</p>
        <p>Sing In</p>
      </div>
    </header>
  );
};

export default Header;
