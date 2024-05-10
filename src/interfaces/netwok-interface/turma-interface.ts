import { z } from "zod";
import schemaTurma from "../../schemas/turma.schema";

export default interface iTurma extends z.infer<typeof schemaTurma> {
    id: number;
    escolaId: number
}
