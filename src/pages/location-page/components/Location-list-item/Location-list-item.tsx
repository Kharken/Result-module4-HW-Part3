import styles from './styles.module.css'
import {Link} from 'react-router-dom';
import {LocationCardProps} from "../../../../types/location-types";

export const LocationListItem = (props: LocationCardProps) => {

    const {isLoading, error, data} = props;
    const {id, name} = data;

    return (
        <li className={styles['episode-item']}>
            <Link to={`/location/${id}`}
                  state={{isLoading, data, error}}
               className={styles['episode-link']}>
                <div className={styles['episode-id']}>{id}</div>
                <h3 className={styles['episode-name']}>{name}</h3>
            </Link>
        </li>
    )
}
