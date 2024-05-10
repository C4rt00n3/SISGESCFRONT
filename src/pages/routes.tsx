import { Route, Routes } from "react-router-dom";
import RoutesInterface from "../interfaces/iRoutes";
import { Bounce, ToastContainer } from "react-toastify";

/**
 * Componente que centraliza a definição de rotas em uma aplicação React Router.
 * Recebe um array de objetos RoutesInterface, mapeia esses objetos para criar os componentes Route correspondentes
 * e os renderiza dentro de um componente Routes.
 * 
 * @param routers Um array de objetos RoutesInterface contendo as propriedades de cada rota.
 * @returns Um componente Routes contendo os componentes Route definidos a partir do array routers.
 */
const RoutesCentralize = ({ routers }: { routers: RoutesInterface[] }) => {
    // Mapeia o array routers para criar os componentes Route correspondentes

    // Renderiza os componentes Route dentro de um componente Routes
    return <>
        <Routes>
            {
                routers.map(({ path, element }, index) => {
                    return <Route path={path} element={element} key={index}></Route>
                })
            }
        </Routes>;
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    </>
}

export default RoutesCentralize;
