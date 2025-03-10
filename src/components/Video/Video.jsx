import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/lazy';
import { IMAGE_URL } from '../../constants/const';
import css from './Video.module.css';

import { selectFilteredTrailers } from '../../redux/movies/selectors';

const Video = ({ id, type, posterPath }) => {
  const [isPlayerActive, setIsPlayerActive] = useState(false); 
  const { tvVideoKey, videoKey, loading } = useSelector(selectFilteredTrailers);
  console.log(posterPath)
  const videoUrl = type === 'movie' ? videoKey : tvVideoKey;

  
  const handlePlayClick = () => {
    if (videoUrl) {

      setIsPlayerActive(true);
    }
  };

  return (
    <div className={`${css.container} ${isPlayerActive ? css.fadeIn : ''}`}>
      {isPlayerActive && videoUrl ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoUrl}`}
          controls
          playing={true} 
          width="100%"
          height="100%"
        />
      ) : (
        <div
          style={{
            backgroundImage: posterPath ? `url(${IMAGE_URL}${posterPath})` : 'none',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
          }}
            className={`${css.placeholder} ${isPlayerActive ? css.fadeOut : ''}`}
          onClick={handlePlayClick}
          role="button"
          tabIndex={0} 
          onKeyDown={(e) => e.key === 'Enter' && handlePlayClick()}
        >
          {loading ? (
            <p>Loading...</p>
          ) : videoUrl ? (
            <>
              <div className={css.playIcon}>▶</div>
              <p>Watch Trailer</p>
            </>
          ) : (
            <p>Not avaible</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Video;