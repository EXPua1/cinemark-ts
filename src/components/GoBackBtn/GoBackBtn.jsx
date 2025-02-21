import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import css from './GoBackBtn.module.css';

const GoBackBtn = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  return (
    <Link to={backLink.current} className={css.backBtn}>
      <FaArrowLeft />
      Go back
    </Link>
  );
};

export default GoBackBtn;
