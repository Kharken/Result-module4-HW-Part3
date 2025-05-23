

import {Link} from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import {ROUTES} from "../../service/routes";

export const NotFoundPage = () => {
  return(
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Page not found</p>
        <Link className={styles.link} to={ROUTES.Index}>Go to Main Page</Link>
      </div>

    </>
  );
}
