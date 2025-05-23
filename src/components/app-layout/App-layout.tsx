import {Outlet} from "react-router-dom";
import {Navbar} from "../navbar/Navbar";
import styles from './styles.module.css'

export const AppLayout = () => {
    return (
        <>
            <header className={styles.header}>
                <Navbar/>
            </header>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <footer>
                <Navbar/>
            </footer>
        </>
    )
}
