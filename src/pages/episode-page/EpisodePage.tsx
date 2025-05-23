import styles from './EpisodePage.module.css'
import {useFetch} from "../../hooks/useFetch";
import {API_ROUTES} from "../../const/const";
import {EpisodeListItem} from "./components/episode-list-item/EpisodeListItem";
import {Episode} from "../../types/episode-types";

export const EpisodePage = () => {
    const {data, isLoading, error} = useFetch<Episode>(API_ROUTES.Episode);
    return (
        <div className={styles['episode-container']}>
            <ul className={styles['episode-list']}>
                {data && data.map((item) => <EpisodeListItem data={item}
                                                             key={item.id}
                                                             isLoading={isLoading}
                                                             error={error}/>)}
            </ul>
        </div>
    )
}
