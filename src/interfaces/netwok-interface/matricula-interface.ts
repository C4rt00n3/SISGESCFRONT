import Materia from "./materia.-interfaces";
import { z } from "zod";
import iFiliacao from "./filiacao-interface";
import schemaMatricula from "../../schemas/matricula-schema";

type Type = z.infer<typeof schemaMatricula>;

export default interface iMatricula extends Type {
    id: number;
    Materia: Materia[];
    filiacao: iFiliacao[]
}