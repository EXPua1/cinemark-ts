import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/func';

import css from './DetailsInfo.module.css';

const MovieInfo = ({ data, ageCertification, credits }) => {
  const director = credits.crew.find(c => c.job === 'Director');
  const actors = credits.cast.slice(0, 9);

  return (
    <div className={css.infoCont}>
      <div className={css.ratingCont}>
        <p className={css.rating}>{data.vote_average?.toFixed(1)}</p>
        <p className={css.age}>{ageCertification}</p>
      </div>

      <ul className={css.infoList}>
        <li>
          <p>
            <span>Genre:</span>
            {data.genres?.map(g => g.name).join(', ')}
          </p>
        </li>
        <li>
          <p>
            <span>Running time:</span> {data.runtime} min
          </p>
        </li>
        <li>
          <p>
            <span>Country:</span>
            {data.production_countries?.map(c => c.name).join(', ')}
          </p>
        </li>
        <li>
          <p>
            <span>Premiere:</span> {formatDate(data.release_date)}
          </p>
        </li>
        <li>
          <p>
            <span>Status:</span> {data.status}
          </p>
        </li>
      </ul>

      <ul className={css.actorsList}>
        <li>
          <span>Director:</span>
          {director?.name ? (
            <Link to={`/person/${director.id}`}>{director.name}</Link>
          ) : (
            <p>&#39N/A&#39</p>
          )}
        </li>
        <li>
          <span>Actors:</span>
          {actors.map((a, index) => (
            <Link key={a.id} to={`/person/${a.id}`}>
              {a.name}
              {index < actors.length - 1 && ', '}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default MovieInfo;
