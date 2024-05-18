import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Home from "./home/page";
import Login from "./login/page";
import Matricula from "./matricula/page";
import { useHomeContext } from "../contexts/home-provider-context";
import NetWork from "../utils/network";
import callToast from "../utils/tosts";

/**
 * Componente que centraliza a definição de rotas em uma aplicação React Router.
 *
 * @returns Um fragmento contendo os componentes Routes e ToastContainer.
 */
const RoutesCentralize = () => {
    const { setUser, user, fetchMatriculas } = useHomeContext();
    const [count, setCount] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const authentication = useCallback(async () => {
        const path = location.pathname;
        const api = new NetWork("auth/authentication", 5000, {});
        const token = localStorage.getItem("token") || null;

        const callError = (error: any) => {
            callToast("error", "Faça login");
            localStorage.removeItem('token');
            setUser(undefined);
            if (path !== "/")
                navigate("/");
            console.log(error);
        };

        try {
            if (!token && path !== '/') {
                navigate("/");
                return;
            }

            const pick = await api.get({});
            setUser(pick);
        } catch (error) {
            callError(error)
        } finally {
            setCount((prevCount) => prevCount + 1); // Incrementa o contador
        }
    }, [count, location.pathname, navigate, setUser]);

    useEffect(() => {
        if (count === 0 && !user) {
            authentication();
        }
        fetchMatriculas()
    }, [authentication]);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/matricula" element={<Matricula />} />
            <Route path="/matricula/pdf/:id" element={
               <Matricula/>
            } />
            <Route path="/matricula/:id" element={<Matricula />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};

export default RoutesCentralize;
