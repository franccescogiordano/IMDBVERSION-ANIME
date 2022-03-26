import {
    BrowserRouter as Router, Switch, Route,  Redirect} from "react-router-dom";
import { PantallaPrincipal } from "../components/Anime/PantallaPrincipal";
import { Detalles } from "../components/Detalles";
import { AnimeFavorito } from "../components/AnimeFavorito";
import { NavbarScreen } from "../components/Navbar/NavbarScreen";
import { DibujarScreen } from "../components/DibujarScreen";

export const AppRouter = () => {
    return (
        <Router>
            <DibujarScreen/>
            <NavbarScreen/>
            <Switch>
                <Route exact path="/">
                    <PantallaPrincipal/>
                </Route>
                <Route exact path="/listaFavoritos">
                    <AnimeFavorito/>
                </Route>
                <Route path="/id" >
                    <Detalles/>
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}