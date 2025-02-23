import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${
          type === 'movie' ? videoKey : tvVideoKey
        }`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
