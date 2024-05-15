import { Router, Routes, Route } from "react-router-dom";
import Home from "./home/page";
import Login from "./login/page";
import Matricula from "./matricula/page";

/**
 * Componente que centraliza a definição de rotas em uma aplicação React Router.
 *
 * @param routers Um array de objetos RoutesInterface contendo as propriedades de cada rota.
 * @returns Um fragmento contendo os componentes Routes e ToastContainer.
 */
const RoutesCentralize = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/matricula" element={<Matricula />} />
            <Route path="/matricula/:id" element={<Matricula />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};

export default RoutesCentralize;
