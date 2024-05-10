import 'react-toastify/dist/ReactToastify.css'; // Importa o estilo padrão do React Toastify
import { HomeContextProvider } from "../contexts/home-provider-context"; // Importa o contexto HomeContextProvider
import { MatriculaContextProvider } from '../contexts/matricula-provider-context'; // Importa o contexto MatriculaContextProvider
import Loading from '../components/loading'; // Importa o componente Loading
import RoutesCentralize from './routes'; // Importa o componente RoutesCentralize
import Home from './home/page'; // Importa o componente Home
import Login from './login/page'; // Importa o componente Login
import Matricula from './matricula/page'; // Importa o componente Matricula
import RoutesInterface from '../interfaces/iRoutes'; // Importa a interface RoutesInterface
import { BrowserRouter } from 'react-router-dom'; // Importa o BrowserRouter do react-router-dom

/**
 * Componente que define o layout principal da aplicação.
 * Configura o roteamento, os contextos e outros elementos comuns da interface.
 * 
 * @returns O layout principal da aplicação.
 */
export default function RootLayout() {
  const routers: RoutesInterface[] = [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/matricula",
      element: <Matricula />
    }
  ];

  return (
    <BrowserRouter>
      {/* Provedor do contexto HomeContextProvider */}
      <HomeContextProvider>
        {/* Provedor do contexto MatriculaContextProvider */}
        <MatriculaContextProvider>
          {/* Componente de loading */}
          <Loading />
          {/* Componente RoutesCentralize com as rotas da aplicação */}
          <RoutesCentralize routers={routers} />
        </MatriculaContextProvider>
      </HomeContextProvider>
    </BrowserRouter>
  );
}
