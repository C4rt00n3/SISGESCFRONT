import { z } from "zod";
import schemaDocumento from "./documento-schema";
import schemaEndereco from "./endereco-schema";
import schemaConvenio from "./convenio-schema";
import { schemaFiliacao } from "./filiacao-schema";
import { CorRaca, Sexo } from "../interfaces/enums";

const schemaAluno = z.object({
    nome: z.string().nonempty().refine(value => value.trim() !== '', {
        message: 'Este campo não pode estar em branco',
        path: ['nome'],
    }),
    celularAluno: z.string()
    .nonempty()
    .transform(e => {
        return e.replace(/\D/g, '');
    }).refine( data => data.length === 11, {
        message: "O número não é valido."
    }),
    email: z.string().optional(),
    mudancaNome: z.string().optional(),
    procedAluno: z.string().optional(),
    ficheiro: z.string().optional(),
    alimentos: z.string().optional(),
    localFotoAluno: z.string().optional(),
    areaProtecaoGov: z.string().optional(),
    corRaca_Aluno: z.nativeEnum(CorRaca),
    sexo: z.nativeEnum(Sexo),
    Convenio: z.union([
        schemaConvenio,
        z.boolean(),
    ]).optional().transform(e => {
        if (typeof e == "boolean") {
            return null
        }
        return e
    }),
    Documentos: schemaDocumento,
    Endereco: schemaEndereco,
    turmaId: z.string().transform(e => Number(e)),
    serieId: z.string().transform(e => Number(e)),
    filiacao1: schemaFiliacao,
    filiacao2: z.union([
        schemaFiliacao,
        z.boolean(),
    ]).optional().transform(e => {
        if (typeof e == "boolean") {
            return null
        }
        return e
    })
}).transform(e => {
    const cache = [e.filiacao1];
    if (e.filiacao2)
        cache.push(e.filiacao2)
    const { filiacao1, filiacao2, ...data } = e;
    return { ...data, filiacao: cache }

});


export default schemaAluno;