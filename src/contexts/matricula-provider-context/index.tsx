// context.ts
import { ReactNode, useEffect, useState, createContext, useContext } from 'react';
import fetchTurmasAndSeries from './utils/data-forms/fetch-turmas-and-series';
import MatriculaProviderContext from './provider-interface';
import InputFields from '../../interfaces/inputs-interface/input-fields';
import callToast from '../../utils/tosts';


// Componente provedor de tema
interface ThemeProviderProps {
  children: ReactNode;
}

// Create the context with an initial value
export const MatriculaContext = createContext<MatriculaProviderContext>({
  fields: []
});

export const MatriculaContextProvider:  React.FC<ThemeProviderProps> = ({ children }) => {
  const [fields, setFields] = useState<InputFields[]>([]);

  useEffect(() => {
    fetchTurmasAndSeries().then(dataInputs => {
      setFields(dataInputs);
    }).catch(error => {
      callToast(
        error.response?.data?.message
      );
    });
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
