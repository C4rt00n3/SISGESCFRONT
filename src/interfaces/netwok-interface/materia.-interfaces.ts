import iFalta from "./faltas-interface";
import iNota from "./nota-interface";

export default interface Materia {
    id: number;
    name: string;
    notas: iNota[];
    faltas: iFalta[];
    matriculaId: number;
}