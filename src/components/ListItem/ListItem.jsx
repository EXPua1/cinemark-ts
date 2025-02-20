import { useState } from 'react';
import { Link } from 'react-router-dom';

import MovieModal from '../MovieModal/MovieModal';

import css from './ListItem.module.css';

const ListItem = ({ item, actions, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { media_type } = item;

  return (
    <>
      <li
        className={`${css.item} ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <div className={css.content}>
          {(media_type === 'movie' || media_type === 'tv') && (
            <>
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                />
              ) : (
                <div className={css.placeholder}>No Image</div>
              )}
              <h3>{item.title || item.name}</h3>
            </>
          )}

          {/* Персони */}
          {media_type === 'person' && (
            <>
              <Link to={`/person/${item.id}`} className={css.personLink}>
                {/* {item.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.name}
                  />
                ) : (
                  <div className={css.placeholder}>No Image</div>
                )} */}
                <h3>{item.name}</h3>
                {/* {item.known_for?.length > 0 && (
                  <p>
                    Known for:{' '}
                    {item.known_for
                      .map(work => work.title || work.name)
                      .join(', ')}
                  </p>
                )} */}
              </Link>
            </>
          )}
        </div>
        {actions && <div className={css.actions}>{actions}</div>}
      </li>

      {isOpen && (media_type === 'movie' || media_type === 'tv') && (
        <MovieModal item={item} onClose={() => setIsOpen(false)}>
          <Link to={`/movies/${item.id}`} className={css.detailButton}>
            Details
          </Link>
        </MovieModal>
      )}
    </>
  );
};

export default ListItem;
