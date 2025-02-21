import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import MovieModal from '../MovieModal/MovieModal';

import css from './ListItem.module.css';

const ListItem = ({ item, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { media_type, id, poster_path, title, name } = item;
  const isMovieOrTV = media_type === 'movie' || media_type === 'tv';

  return (
    <>
      <li className={`${css.item} ${className}`}>
        <div className={css.content}>
          {isMovieOrTV && (
            <>
              <Link
                to={`/${media_type}/${id}`}
                state={{ from: location }}
                className={css.videoLink}
              >
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title || name}
                  />
                ) : (
                  <div className={css.placeholder}>No Image</div>
                )}
              </Link>
              <h3 onClick={() => setIsOpen(true)}>{title || name}</h3>
            </>
          )}

          {/* Персони */}
          {media_type === 'person' && (
            <>
              <Link
                to={`/person/${id}`}
                state={{ from: location }}
                className={css.personLink}
              >
                {/* {item.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.name}
                  />
                ) : (
                  <div className={css.placeholder}>No Image</div>
                )} */}
                <h3>{name}</h3>
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
        {/* {actions && <div className={css.actions}>{actions}</div>} */}
      </li>

      {isOpen && isMovieOrTV && (
        <MovieModal item={item} onClose={() => setIsOpen(false)}>
          <Link
            to={`/${media_type}/${id}`}
            state={{ from: location }}
            className={css.detailButton}
          >
            Details
          </Link>
        </MovieModal>
      )}
    </>
  );
};

export default ListItem;
