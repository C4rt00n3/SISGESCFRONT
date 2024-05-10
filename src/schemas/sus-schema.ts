import { z } from "zod";
import { Sexo } from "../interfaces/enums";

const schemaSus = z.object({
    nome: z.string().nonempty({ message: "O nome é obrigatório." }),
    nascimento: z.string().nonempty({ message: "A data de nascimento é obrigatória." }).transform(e => e.length > 0 && new Date(e).toISOString().substring(0, 10)),
    sexo: z.nativeEnum(Sexo, { message: "O sexo deve ser masculino, feminino ou outro." }),
    numero: z.string()
        .nonempty()
        .transform(e => e.replace(/\D/g, ''))
        .refine(e => e.length === 15, { message: "O número do sus não é valido." }),
});

export default schemaSus;
