import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieInfo from '../DetailsInfo/MovieInfo';
import TvShowInfo from '../DetailsInfo/TvShowInfo';
import PersonInfo from '../DetailsInfo/PersonInfo';
import Video from '../Video/Video';

import { fetchAgeCertification } from '../../utils/ageUtils';

import { IMAGE_URL } from '../../constants/const';

import css from './Details.module.css';

const Details = ({ details: data }) => {
  const { type } = useParams();
  const [ageCertification, setAgeCertification] = useState('');

  useEffect(() => {
    if (data) {
      fetchAgeCertification(type, data.id, setAgeCertification);
    }
  }, [data, type]);

  const InfoComponent =
    type === 'movie' ? MovieInfo : type === 'tv' ? TvShowInfo : PersonInfo;

  return (
    <>
      {data && (
        <div className={css.detailsCont}>
          <h1 className={css.titleName}>{data.title || data.name}</h1>

          <div className={css.wrap}>
            <div>
              <div className={css.content}>
                <img
                  src={`${IMAGE_URL}${data.poster_path || data.profile_path}`}
                  alt={data.title || data.name}
                  className={`${css.imgMain} ${css.flexItem}`}
                />

                <InfoComponent
                  data={data}
                  ageCertification={ageCertification}
                />
              </div>

              <div className={css.descript}>
                <p className={css.textDescr}>
                  {data.overview || 'Not Available'}
                </p>
              </div>
            </div>

            {type !== 'person' && <Video id={data.id} type={type} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
