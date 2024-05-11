import 'react-toastify/dist/ReactToastify.css'; // Importa o estilo padrão do React Toastify
import { HomeContextProvider } from "../contexts/home-provider-context"; // Importa o contexto HomeContextProvider
import { MatriculaContextProvider } from '../contexts/matricula-provider-context'; // Importa o contexto MatriculaContextProvider
import Loading from '../components/loading'; // Importa o componente Loading
import RoutesCentralize from './routes'; // Importa o componente RoutesCentralize
import { BrowserRouter } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';

/**
 * Componente que define o layout principal da aplicação.
 * Configura o roteamento, os contextos e outros elementos comuns da interface.
 * 
 * @returns O layout principal da aplicação.
 */
export default function RootLayout() {
  return (
    <>
      <BrowserRouter>
        {/* Provedor do contexto HomeContextProvider */}
        <HomeContextProvider>
          {/* Provedor do contexto MatriculaContextProvider */}
          <MatriculaContextProvider>
            {/* Componente de loading */}
            <Loading />
            {/* Componente RoutesCentralize com as rotas da aplicação */}
            <RoutesCentralize />
          </MatriculaContextProvider>
        </HomeContextProvider>
      </BrowserRouter>
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
  );
}
