import { z } from "zod";
import schemaSituacaoMilitar from "../../schemas/situacao-militar-schema";

type Type = z.infer<typeof schemaSituacaoMilitar>;

export default interface iSituacaoMilitar extends Type {
    id: number
};
