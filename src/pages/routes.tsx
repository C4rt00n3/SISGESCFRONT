import { useRoutes } from "react-router-dom";
import Home from "./home/page";
import Login from "./login/page";
import EnrollmentRouteWithId from "./matricula/[id]/page";
import Matricula from "./matricula/page";

/**
 * Componente que centraliza a definição de rotas em uma aplicação React Router.
 *
 * @param routers Um array de objetos RoutesInterface contendo as propriedades de cada rota.
 * @returns Um fragmento contendo os componentes Routes e ToastContainer.
 */
const RoutesCentralize = () => {
    const routers = useRoutes([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "home",
            element: <Home />,
        },
        {
            path: "matricula",
            element: <Matricula />,
        },
        {
            path: "matricula/:id",
            element: <EnrollmentRouteWithId />
        }
    ]);
    return routers
};

export default RoutesCentralize;
