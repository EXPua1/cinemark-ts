import ListItem from '../ListItem/ListItem';

import css from './MoviesList.module.css';

const MoviesList = ({ items, variant = 'list' }) => {
  // console.log({ items });

  return (
    <ul
      className={`${css.list} ${variant === 'grid' ? css.grid : css.listView}`}
    >
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MoviesList;
