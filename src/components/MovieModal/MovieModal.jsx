import css from './MovieModal.module.css';

const MovieModal = ({ item, onClose, children }) => {
  // console.log({ item }, children);

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className={css.closeButton}>
          X
        </button>
        <h2>{item.title}</h2>
        <p>{item.overview}</p>
        <div className={css.actions}>{children}</div>
      </div>
    </div>
  );
};

export default MovieModal;
