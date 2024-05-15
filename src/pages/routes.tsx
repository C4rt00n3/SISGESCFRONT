import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home/page";
import Login from "./login/page";
import Matricula from "./matricula/page";
import { createRoot } from "react-dom/client";

/**
 * Componente que centraliza a definição de rotas em uma aplicação React Router.
 *
 * @param routers Um array de objetos RoutesInterface contendo as propriedades de cada rota.
 * @returns Um fragmento contendo os componentes Routes e ToastContainer.
 */
const RoutesCentralize = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            children: [
                {
                    path: "matricula",
                    element: <Matricula />,
                },
                {
                    path: "matricula/:id",
                    element: <Matricula />,
                },
                {
                    path: "home",
                    element: <Home />,
                },
            ],
        },
    ]);

    const root = document?.getElementById("root");

    root && createRoot(root).render(
        <RouterProvider router={router} />
    );

    return <></>

};

export default RoutesCentralize;
