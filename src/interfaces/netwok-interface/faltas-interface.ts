import Materia from "./materia.-interfaces";

export default interface iFalta {
    id: number;
    data: Date;
    materiaId: number;
    materia: Materia;
    // Adicione um campo para a justificativa, se necessário
}