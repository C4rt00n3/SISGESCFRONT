import Materia from "./materia.-interfaces";
import { z } from "zod";
import schemaMatricula from "../../schemas/matricula-schema";
import iAluno from "./aluno-interface";

type Type = z.infer<typeof schemaMatricula>;

export default interface iMatricula extends Type {
    id: number;
    Materia: Materia[];
    Aluno: iAluno
}