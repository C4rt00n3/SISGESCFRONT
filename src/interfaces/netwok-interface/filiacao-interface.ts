import { z } from "zod";
import { schemaFiliacao } from "../../schemas/filiacao-schema";

type Type = z.infer<typeof schemaFiliacao>;


export default interface iFiliacao extends Type {
    id: number
};