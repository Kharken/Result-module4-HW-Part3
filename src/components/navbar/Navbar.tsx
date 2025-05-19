import {API_ROUTES} from "../../const/const";
import {Link} from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div>
                <Link to="/" className="nav__item">Home</Link>
            </div>
            <div className={styles.nav__banner}>
                <span>
                    Welcome to Rick & Morty Universe!
                </span>
            </div>
            <ul className={`${styles.container} ${styles.nav__list}`}>
                {Object.entries(API_ROUTES).map((item) => (
                    <li>
                        <Link to={item[1]} className="nav__item">
                            {item[0]}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
