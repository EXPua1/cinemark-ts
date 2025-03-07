import { formatDate } from '../../utils/func';

import css from './DetailsInfo.module.css';

const MovieInfo = ({ data, ageCertification }) => {
  return (
    <div className={css.infoCont}>
      <div className={css.ratingCont}>
        <p className={css.rating}>{data.vote_average.toFixed(1)}</p>
        <p className={css.age}>{ageCertification}</p>
      </div>

      <ul className={css.infoList}>
        <li>
          <span>Genre:</span>
          {data.genres?.map(g => g.name).join(', ')}
        </li>
        <li>
          <span>Running time:</span> {data.runtime} min
        </li>
        <li>
          <span>Country:</span>
          {data.production_countries?.map(c => c.name).join(', ')}
        </li>
        <li>
          <span>Premiere:</span> {formatDate(data.release_date)}
        </li>
        <li>
          <span>Status:</span> {data.status}
        </li>
      </ul>

      <ul className={css.actorsList}>
        <li>
          <span>Director:</span> bla, bla
        </li>
        <li>
          <span>Actors:</span> bla, bla, bla
        </li>
      </ul>
    </div>
  );
};

export default MovieInfo;
