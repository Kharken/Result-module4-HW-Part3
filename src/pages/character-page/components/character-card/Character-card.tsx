import styles from './styles.module.css'
import {CharacterCardProps} from "../../../../types/character-types";

export const CharacterCard = (props: CharacterCardProps) => {

    const {isLoading, error, data } = props;
    const {status, species, name, gender, created, type, image} = data;

    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {error && <p>{error.toString()}</p>}
            <div className={styles.card}>
                <img src={image}
                     alt={name}
                     className={styles['card-image']}/>
                <div className={styles['card-content']}>
                    <h2 className={styles['card-title']}>{name}</h2>
                    <ul className={styles['details-list']}>.
                        <li className={`${styles.status} ${styles['status-alive']}`}>{status}</li>
                        <li>Species: {species}</li>
                        <li>Type: {type}</li>
                        <li>Gender: {gender}</li>
                    </ul>
                    <span className={styles['created-date']}>Created: {created}</span>
                </div>
            </div>
        </>
    )
}
