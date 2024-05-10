import HomeContextInterface from "./home-context-interface";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import NetWork from "../../utils/network";
import iStatistics from "../../interfaces/statistics";
import iMatricula from "../../interfaces/netwok-interface/matricula-interface";
import callToast from "../../utils/tosts";
import { useNavigate } from "react-router-dom";

// Componente provedor de tema
interface ThemeProviderProps {
    children: React.ReactNode;
}

export const HomeContext = createContext<HomeContextInterface>({} as HomeContextInterface);

export const HomeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [statistics, setStatistics] = useState<iStatistics | null>(null);
    const [matriculas, setMatriculas] = useState<iMatricula[]>([]);

    const router = useNavigate();

    const [loading, setLoading] = useState(false)

    const navigation = (route: string) => {
        setLoading(true)
        router(route)
        setLoading(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            const api = new NetWork("", 5000, {});
            try {
                const data = await api.get({});
                setStatistics(data);
                const matriculasData = await api.getAll({ route: "matricula" });
                setMatriculas(matriculasData);
            } catch (error: any) {
                callToast(
                    error.response?.data?.message || "An error occurred",
                );
            }
        };

        fetchData();
    }, []);

    return (
        <HomeContext.Provider value={{
            matriculas,
            navigation,
            statistics,
            setMatriculas,
            loading
        }}>
            {children}
        </HomeContext.Provider>
    );
};

// Hook personalizado para acessar o contexto do tema
export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
    }
    return context;
};
