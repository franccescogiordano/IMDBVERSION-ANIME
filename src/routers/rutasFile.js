import {
    BrowserRouter as Router, Routes, Route,  Navigate } from "react-router-dom";
import { PantallaPrincipal } from "../components/PantallaPrincipal";
import { Detalles } from "../components/Detalles";
import { AnimeFavorito } from "../components/AnimeFavorito";
import { NavBar } from "../components/NavBar";
import { DibujarScreen } from "../components/DibujarScreen";

export const RutasFile = () => {
    return (
        <div>
        <Router>
        <div className="covertor">
            <DibujarScreen/>
            <div className="stream">
            <NavBar/>
            <Routes>
                <Route path="/" element={<PantallaPrincipal/>}>
                </Route>
                <Route path="/listaFavoritos" element={ <AnimeFavorito/>}>
                   
                </Route>
                <Route path="/id" element={  <Detalles/>}>
                   
                </Route>
       
                <Route element={  <Navigate  to="/" />}>
                   
                </Route>
                
            </Routes>
            </div>
            </div>
        </Router>
        </div>
    )
}