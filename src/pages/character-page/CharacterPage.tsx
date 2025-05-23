import {useFetch} from "../../hooks/useFetch";
import {Character} from "../../types/character-types";
import {API_ROUTES} from "../../const/const";
import {CharacterListItem} from "./components/character-list-item/CharacterListItem";
import styles from './CharacterPage.module.css'

export const CharacterPage = () => {
    const {data, isLoading, error} = useFetch<Character>(API_ROUTES.Characters);

    return (
        <div className={styles['character-container']}>
            <ul className={styles['character-list']}>
                {data && data.map((item) => <CharacterListItem data={item}
                                                               key={item.id}
                                                               isLoading={isLoading}
                                                               error={error}/>)}
            </ul>
        </div>
    )
}
