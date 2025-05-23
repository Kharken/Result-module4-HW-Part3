import styles from './styles.module.css'
import {useFetch} from "../../hooks/useFetch";
import {API_ROUTES} from "../../const/const";
import {LocationListItem} from "./components/Location-list-item/Location-list-item";
import {Locations} from "../../types/location-types";

export const LocationPage = () => {
    const {data, isLoading, error} = useFetch<Locations>(API_ROUTES.Location);
    return (
        <div className={styles['episode-container']}>
            <ul className={styles['episode-list']}>
                {data && data.map((item) => <LocationListItem data={item}
                                                              key={item.id}
                                                              isLoading={isLoading}
                                                              error={error}/>)}
            </ul>
        </div>
    )
}
