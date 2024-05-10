import { z } from "zod";
import schemaDocumento from "../../schemas/documento-schema";


type Type = z.infer<typeof schemaDocumento>;

export interface iDocumento extends Type {
    id: number
}
