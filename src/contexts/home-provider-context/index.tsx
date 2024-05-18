import HomeContextInterface from "./home-context-interface";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import NetWork from "../../utils/network";
import iStatistics from "../../interfaces/statistics";
import iMatricula from "../../interfaces/netwok-interface/matricula-interface";
import callToast from "../../utils/tosts";
import { useNavigate } from "react-router-dom";
import Usuario from "../../interfaces/user-interface";

// Componente provedor de tema
interface ThemeProviderProps {
    children: React.ReactNode;
}

export const HomeContext = createContext<HomeContextInterface>({} as HomeContextInterface);

export const HomeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [statistics, setStatistics] = useState<iStatistics | null>(null);
    const [matriculas, setMatriculas] = useState<iMatricula[]>([]);
    const [user, setUser] = useState<Usuario>()

    const router = useNavigate();

    const [loading, setLoading] = useState(false)

    const navigation = (route: string) => {
        setLoading(true)
        router(route)
        setLoading(false)
    }

    const fetchMatricula = (id: number): iMatricula | undefined => {
        const fetch = async (id: number) => {
            const api = new NetWork("matricula", 5000, { id })
            return await api.getWithId({ id })
        }
        if(matriculas.length > 0)
            fetchMatriculas();
        
        const findMatricula = matriculas.find(e => e.id == Number(id));

        if (!findMatricula)
            fetch(+id).then(matricula => {
                return {
                    ...matricula,
                    Aluno: {
                        ...matricula.Aluno,
                        ...(matricula.Aluno?.filiacao[0] && { filiacao1: matricula.Aluno.filiacao[0] }),
                        ...(matricula.Aluno?.filiacao[1] && { filiacao2: matricula.Aluno.filiacao[1] }),
                    }
                }
            }).catch(error => {
                callToast("error", error.response?.data?.message)
                throw error
            })
        else
            return findMatricula
    }

    const api = new NetWork("", 5000, {});

    const fetchStatics = async () => {
        try {
            const data = await api.get({});
            setStatistics(data);
        } catch (error: any) {
            callToast(
                error.response?.data?.message || "An error occurred",
            );
        }
    }

    const fetchMatriculas = async () => {
        await api.getAll({ route: "matricula" })
            .then(data => {
                if (data.length)
                    setMatriculas(data);
            })
            .catch(error => {
                callToast(
                    error.response?.data?.message || "An error occurred",
                )
            })
    };

    useEffect(() => {
        fetchStatics()
    }, []);

    return (
        <HomeContext.Provider value={{
            matriculas,
            navigation,
            statistics,
            setMatriculas,
            loading,
            fetchStatics,
            fetchMatriculas,
            user,
            setUser,
            fetchMatricula,
            setLoading
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
