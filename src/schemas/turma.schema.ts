import { z } from "zod";
import { NivelEnsino } from "../interfaces/enums";

const schemaTurma = z.object({
    nome: z.string(),
    nivelEscolar: z.nativeEnum(NivelEnsino).transform(e => e + "")
})

export default schemaTurma;