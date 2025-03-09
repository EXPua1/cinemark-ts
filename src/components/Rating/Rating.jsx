import css from './Rating.module.css';

const Rating = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Rating;
