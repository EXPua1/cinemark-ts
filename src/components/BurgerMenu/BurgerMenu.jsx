import { useState } from 'react';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={css.burger_menu} onClick={() => setIsOpen(!isOpen)}>
      <span className={`${css.bar} ${isOpen ? css.topBar : ''}`}></span>
      <span className={`${css.bar} ${isOpen ? css.middleBar : ''}`}></span>
      <span className={`${css.bar} ${isOpen ? css.bottomBar : ''}`}></span>
    </button>
  );
};

export default BurgerMenu;
