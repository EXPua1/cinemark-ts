import { formatDate } from '../../utils/func';
import css from './DetailsInfo.module.css';

const PeopleInfo = ({ data }) => {
  return (
    <div className={css.infoCont}>
      <p className={css.rating}>{data.popularity}</p>
      <ul className={css.infoList}>
        <li>
          <span>Known For:</span> {data.known_for_department}
        </li>
        <li>
          <span>Birthday:</span> {formatDate(data.birthday)}
        </li>
        <li>
          <span>Place of Birth:</span> {data.place_of_birth}
        </li>
      </ul>
      <ul className={css.actorsList}>
        <li>
          <span>Also Known As:</span>{' '}
          {data.also_known_as?.join(', ') || 'Not Available'}
        </li>
      </ul>
    </div>
  );
};

export default PeopleInfo;
