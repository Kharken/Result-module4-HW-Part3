import {MainPage} from "../pages/main-page/Main-page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppLayout} from "../components/app-layout/App-layout";
import {CharacterPage} from "../pages/character-page/Character-page";
import './app.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                       element={<AppLayout/>}>
                    <Route index
                           element={<MainPage/>}/>
                    <Route path="/characters"
                           element={<CharacterPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
