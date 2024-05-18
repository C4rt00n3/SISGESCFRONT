import { Dispatch, SetStateAction } from "react";
import iMatricula from "../../interfaces/netwok-interface/matricula-interface";
import iStatistics from "../../interfaces/statistics";
import Usuario from "../../interfaces/user-interface";

export default interface HomeContextInterface {
    statistics: iStatistics | null;
    matriculas: iMatricula[];
    setMatriculas: Dispatch<SetStateAction<iMatricula[]>>;
    navigation: (route: string, replace?: boolean) => void;
    loading: boolean;
    fetchMatriculas: () => Promise<void>;
    fetchStatics: () => Promise<void>;
    setUser: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
    user: Usuario | undefined;
    fetchMatricula: (id: number) => iMatricula | undefined;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}