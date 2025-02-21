import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getDetails } from '../../utils/api';
import { IMAGE_URL } from '../constants/const';

import css from './Details.module.css';

const Details = () => {
  const [data, setData] = useState(null);
  const { id, type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetails(type, id);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id, type]);

  return (
    <>
      {data && (
        <div className={css.detailsCont}>
          <h1 className={css.titleName}>{data.title || data.name}</h1>

          <img
            src={`${IMAGE_URL}${data.poster_path || data.profile_path}`}
            alt={data.title || data.name}
            className={css.imgMain}
          />

          <div className={css.infoCont}>
            <span className={css.star}>{data.vote_average?.toFixed(1)}</span>
          </div>

          <p className="mt-4 text-gray-700">{data.overview}</p>
        </div>
      )}
    </>
  );
};

export default Details;
