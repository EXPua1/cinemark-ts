import { BCKGRND_URL } from '../../constants/const';

import styles from './Background.module.css';

const Background = ({ backgroundPath, className = '' }) => {
  return (
    <div
      className={`${styles.background} ${className || ''}`.trim()}
      style={{
        backgroundImage: backgroundPath
          ? `url(${BCKGRND_URL}${backgroundPath})`
          : 'none',
      }}
    />
  );
};

export default Background;
