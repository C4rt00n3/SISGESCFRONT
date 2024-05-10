import { z } from 'zod';

const schemaTituloEleitor = z.object({
    nome: z.string().nonempty().max(255),
    inscricao: z.string()
        .nonempty()
        .transform(e => e.replace(/\D/g, ''))
        .refine(e => e.length === 12, {message: "Titulo de eleitor"}),
    dataNascimento: z.string().transform(e => e.length > 0 && new Date(e).toISOString().substring(0, 10)),
    dataEmissao: z.string().transform(e => e.length > 0 && new Date(e).toISOString().substring(0, 10)),
    pai: z.string().max(255).optional(),
    mae: z.string().nonempty().max(255),
    zona: z.string().transform(e => Number(e)), // Garante que a zona seja um número inteiro maior que 0
    secao: z.string().transform(e => Number(e)), // Garante que a seção seja um número inteiro maior que 0
});

export default schemaTituloEleitor;
