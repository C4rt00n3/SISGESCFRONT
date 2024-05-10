import { z } from 'zod';

const schemaConvenio = z.object({
    nome: z.string().nonempty(),
    descricao: z.string().optional(),
    dataInicio: z.date(),
    dataFim: z.date(),
    ativo: z.boolean().optional(),
});

export  default schemaConvenio;
