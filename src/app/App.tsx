import {MainPage} from "../pages/main-page/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppLayout} from "../components/app-layout/AppLayout";
import {CharacterPage} from "../pages/character-page/CharacterPage";
import './App.css'
import {ROUTES} from "../service/routes";
import {EpisodePage} from "../pages/episode-page/EpisodePage";
import {CharacterCard} from "../pages/character-page/components/character-card/CharacterCard";
import {EpisodeCard} from "../pages/episode-page/components/episode-card/EpisodeCard";
import {LocationPage} from "../pages/location-page/LocationPage";
import {LocationCard} from "../pages/location-page/components/location-card/LocationCard";
import {NotFoundPage} from "../pages/not-found-page/NotFoundPage";

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
                <Route
                    path={ROUTES.NotFound}
                    element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
