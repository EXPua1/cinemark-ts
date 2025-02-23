import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Video.module.css';

import {
  fetchMovieTrailer,
  fetchTvTrailer,
} from '../../redux/movies/moviesSlice';
import { selectFilteredTrailers } from '../../redux/movies/selectors';

const Video = ({ id, type }) => {
  const dispatch = useDispatch();
  const { tvVideoKey, videoKey } = useSelector(selectFilteredTrailers);

  useEffect(() => {
    if (type === 'movie') {
      dispatch(fetchMovieTrailer(id));
    } else if (type === 'tv') {
      dispatch(fetchTvTrailer(id));
    }
  }, [dispatch, type, id]);

  return (
    <div>
      <h2>Video</h2>
      <div className={css.container}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${type === 'movie' ? videoKey : tvVideoKey}?autohide=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: '12px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        ></iframe>
      </div>
     
    </div>
  );
};

export default Video;
