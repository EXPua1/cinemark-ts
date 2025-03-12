import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'; // Импорт модуля CSS

function NotFoundPage() {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundContent}>
                <h1 className={styles.notFoundTitle}>404</h1>
                <p className={styles.notFoundMessage}>Action not found</p>
                <p className={styles.notFoundSubtext}>
                    Seems, this page doesn&apos;t exist?
                </p>
                <Link to="/" className={styles.notFoundButton}>
                    Move to the main page
                </Link>
            </div>
            <div className={styles.filmstripOverlay}></div>
        </div>
    );
}

export default NotFoundPage;