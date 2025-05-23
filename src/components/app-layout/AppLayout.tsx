import {Outlet} from "react-router-dom";
import styles from './AppLayout.module.css'
import {Footer} from "../footer/Footer";
import {Header} from "../header/Header";

export const AppLayout = () => {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
