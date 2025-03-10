import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/lazy';
import { IMAGE_URL } from '../../constants/const';
import css from './Video.module.css';

import { selectFilteredTrailers } from '../../redux/movies/selectors';

const Video = ({ id, type, posterPath }) => {
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const { tvVideoKey, videoKey, loading } = useSelector(selectFilteredTrailers);
  const videoUrl = type === 'movie' ? videoKey : tvVideoKey;

  const handlePlayClick = () => {
    if (videoUrl) {
      setIsPlayerActive(true);
    }
  };

  return (
    <div className={`${css.container} ${isPlayerActive ? css.fadeIn : ''}`}>
      <ReactPlayer
        url={videoUrl ? `https://www.youtube.com/watch?v=${videoUrl}` : null}
        controls
        playing={isPlayerActive}
        width="100%"
        height="100%"
        light={posterPath ? `${IMAGE_URL}${posterPath}` : true}
        onClickPreview={handlePlayClick}
        style={{borderRadius: '8px', overflow: 'hidden'}}
      />
    </div>
  );
};

export default Video;
