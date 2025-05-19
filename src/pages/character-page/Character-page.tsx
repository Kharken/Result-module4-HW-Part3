import {CharacterCard} from "./components/character-card/Character-card";
import {useFetch} from "../../hooks/useFetch";
import {Character} from "../../types/character-types";
import {API_ROUTES} from "../../const/const";

export const CharacterPage = () => {
    const {data, isLoading, error} = useFetch<Character>(API_ROUTES.Characters);

    return(
        <>
            {data && data.map((item) => <CharacterCard data={item} key={item.id} isLoading={isLoading} error={error}/>)}
        </>
    )
}
