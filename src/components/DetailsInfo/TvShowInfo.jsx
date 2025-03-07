import css from './DetailsInfo.module.css';
import { formatDate } from '../../utils/func';

const TvShowInfo = ({ data, ageCertification }) => {
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
          <span>Number of seasons:</span> {data.number_of_seasons}
        </li>
        <li>
          <span>Number of episodes:</span> {data.number_of_episodes}
        </li>

        <li>
          <span>The last episode:</span> {formatDate(data.last_air_date)}
        </li>
        <li>
          <span>Country:</span>
          {data.origin_country?.join(', ')}
        </li>
        <li>
          <span>Premiere:</span> {formatDate(data.first_air_date)}
        </li>
        <li>
          <span>Status:</span> {data.status}
        </li>
      </ul>
    </div>
  );
};

export default TvShowInfo;
