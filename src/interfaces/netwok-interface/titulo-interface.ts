import { z } from "zod";
import schemaTituloEleitor from "../../schemas/titulo-schema";

type Type = z.infer<typeof schemaTituloEleitor>;

export default interface iTituloEleitor extends Type {
    id: number
};
