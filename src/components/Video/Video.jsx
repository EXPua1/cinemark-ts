import { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './Video.module.css';
import ReactPlayer from 'react-player/lazy';
import { IMAGE_URL } from '../../constants/const';


import { selectFilteredTrailers, selectMoviesLoading } from '../../redux/movies/selectors';

const Video = ({ id, type, posterPath }) => {
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const { tvVideoKey, videoKey } = useSelector(selectFilteredTrailers);
  const videoUrl = type === 'movie' ? videoKey : tvVideoKey;



  const loading = useSelector(selectMoviesLoading)

  const handlePlayClick = () => {
    if (videoUrl) {
      setIsPlayerActive(true);
    }
  };

  return (
    <div className={`${css.container} ${isPlayerActive ? css.fadeIn : ''}`}>
      <ReactPlayer
        className={css.player}
        url={videoUrl ? `https://www.youtube.com/watch?v=${videoUrl}` : null}
        controls
        playing={isPlayerActive}
        width="100%"
        height="100%"
        light={videoUrl ? `https://img.youtube.com/vi/${videoUrl}/maxresdefault.jpg` : true}
        onClickPreview={handlePlayClick}
        style={{ borderRadius: '8px', overflow: 'hidden', backgroundSize: 'contain' }}

      />
    </div>
  );
};

export default Video;
