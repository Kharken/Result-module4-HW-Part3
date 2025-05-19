import {Outlet} from "react-router-dom";
import {Navbar} from "../navbar/Navbar";

export const AppLayout = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Navbar/>
            </footer>
        </>
    )
}
