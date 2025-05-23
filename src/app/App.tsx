import {MainPage} from "../pages/main-page/Main-page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppLayout} from "../components/app-layout/App-layout";
import {CharacterPage} from "../pages/character-page/Character-page";
import './app.css'
import {ROUTES} from "../service/routes";
import {EpisodePage} from "../pages/episode-page/Episode-page";
import {CharacterCard} from "../pages/character-page/components/character-card/Character-card";
import {EpisodeCard} from "../pages/episode-page/components/Episode-card/Episode-card";
import {LocationPage} from "../pages/location-page/Location-page";
import {LocationCard} from "../pages/location-page/components/Location-card/Location-card";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={ROUTES.Index}
                    element={<AppLayout/>}>
                    <Route
                        index
                        element={<MainPage/>}/>
                    <Route
                        path={ROUTES.Characters}
                        element={<CharacterPage/>}/>
                    <Route
                        path={ROUTES.Character}
                        element={<CharacterCard/>}/>
                    <Route
                        path={ROUTES.Episodes}
                        element={<EpisodePage/>}/>
                    <Route
                        path={ROUTES.Episode}
                        element={<EpisodeCard/>}/>
                    <Route
                        path={ROUTES.Locations}
                        element={<LocationPage/>}/>
                    <Route
                        path={ROUTES.Location}
                        element={<LocationCard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
