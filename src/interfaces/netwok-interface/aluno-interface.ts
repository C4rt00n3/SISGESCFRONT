import { z } from "zod";
import schemaAluno from "../../schemas/aluno-schema";

type Type = z.infer<typeof schemaAluno>;

export default interface iAluno extends Type {
    id: number
}
