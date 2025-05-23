import {CharacterCard} from "./components/character-card/Character-card";
import {useFetch} from "../../hooks/useFetch";
import {Character} from "../../types/character-types";
import {API_ROUTES} from "../../const/const";
import {CharacterListItem} from "./components/character-list-item/Character-list-item";
import styles from './styles.module.css'

export const CharacterPage = () => {
    const {data, isLoading, error} = useFetch<Character>(API_ROUTES.Characters);

    return(
        <ul className={styles['character-list']}>
            {data && data.map((item) => <CharacterListItem data={item} key={item.id} isLoading={isLoading} error={error}/>)}
        </ul>
    )
}
