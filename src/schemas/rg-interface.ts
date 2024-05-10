import { z } from 'zod';

const schemaRg = z.object({
    rgNumero: z.string().nonempty({ message: 'Rg é obrigatorio' }),
    cpf: z.string()
        .nonempty()
        .transform(e => e.replace(/\D/g, ''))
        .refine(data => data.length === 11, {
            message: "O CPF não é valido."
        }),
    dataExpedicao: z.string().transform(e => e.length > 0 && new Date(e).toISOString().substring(0, 10)),
    dataNascimento: z.string().transform(e => e.length > 0 && new Date(e).toISOString().substring(0, 10)),
    orgaoEmissor: z.string().nonempty(),
    UF: z.string(), // Certifique-se de que os valores correspondam aos enums do EstadoBrasil
    mae: z.string().nonempty(),
    pai: z.string().optional(),
    naturalidade: z.string().nonempty(),
    docOrigem: z.string().nonempty(),
    documentoId: z.number().int().optional(),
});

export default schemaRg;