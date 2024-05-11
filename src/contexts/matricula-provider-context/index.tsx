// context.ts
import { ReactNode, useEffect, useState, createContext, useContext } from 'react';
import MatriculaProviderContext from './provider-interface';
import InputFields from '../../interfaces/inputs-interface/input-fields';
import callToast from '../../utils/tosts';
import dataInputsMatricula from './utils/data-forms/fetch-turmas-and-series';
import NetWork from '../../utils/network';
import iTurma from '../../interfaces/netwok-interface/turma-interface';
import iSerie from '../../interfaces/netwok-interface/serie-interface';


// Componente provedor de tema
interface ThemeProviderProps {
  children: ReactNode;
}

// Create the context with an initial value
export const MatriculaContext = createContext<MatriculaProviderContext>({
  fields: []
});

export const MatriculaContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [fields, setFields] = useState<InputFields[]>([]);

  /**
  * Fetches all turmas and series from the API.
  * @returns A tuple containing the fetched turmas and series.
  */
  const fetchTurmasAndSeries = async () => {
    try {
      const api = new NetWork("turma", 5000, {});
      const fields = dataInputsMatricula(
        await api.getAll({}) as iTurma[],
        await api.getAll({ route: "serie" }) as iSerie[])
      setFields(fields);
    } catch (error: any) {
      callToast(
        error.response?.data?.message
      );
    }
  };

  useEffect(() => {
    fetchTurmasAndSeries()
  }, []);

  return (
    <MatriculaContext.Provider value={{ fields }}>
      {children}
    </MatriculaContext.Provider>
  );
};

// Hook personalizado para acessar o contexto do tema
export const useMatriculaContext = () => {
  const context = useContext(MatriculaContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};
