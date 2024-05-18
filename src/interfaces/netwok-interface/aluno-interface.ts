import { z } from "zod";
import schemaAluno from "../../schemas/aluno-schema";
import iSerie from "./serie-interface";
import iTurma from "./turma-interface";
import iFiliacao from "./filiacao-interface";

type Type = z.infer<typeof schemaAluno>;

export default interface iAluno extends Type {
    id: number;
    Serie: iSerie;
    Turma?: iTurma;
    filiacao: iFiliacao[];
}
