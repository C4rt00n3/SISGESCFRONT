import { Dispatch, SetStateAction } from "react";
import iMatricula from "../../interfaces/netwok-interface/matricula-interface";
import iStatistics from "../../interfaces/statistics";

export default interface HomeContextInterface {
    statistics: iStatistics | null;
    matriculas: iMatricula[];
    setMatriculas: Dispatch<SetStateAction<iMatricula[]>>;
    navigation: (route: string, replace?: boolean) => void;
    loading: boolean
}