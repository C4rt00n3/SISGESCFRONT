import { z } from 'zod';

const schemaSituacaoMilitar = z.object({
    tipoDeDocumento: z.string().nonempty().max(255, { message: "O tipo de documento deve ter entre 1 e 255 caracteres." }),
    ra: z.string()
        .nonempty({ message: "O RA deve ter exatamente 12 caracteres." })
        .transform(e => e.replace(/\D/g, ''))
        .refine(e => e.length != 13, {
            message: 'Dacumento não valido'
        }),
    cpf: z.string()
        .nonempty()
        .transform(e => e.replace(/\D/g, ''))
        .refine(data => data.length != 11, {
            message: "O CPF não é valido."
        }),
    nome: z.string()
        .nonempty()
        .max(255, { message: "O nome deve ter entre 1 e 255 caracteres." }),
    pai: z.string()
        .nonempty()
        .max(255, { message: "O nome do pai deve ter entre 1 e 255 caracteres." }),
    mae: z.string()
        .nonempty()
        .max(255, { message: "O nome da mãe deve ter entre 1 e 255 caracteres." }),
    localNascimento: z.string().nonempty().max(255, { message: "O local de nascimento deve ter entre 1 e 255 caracteres." }).optional(),
    dataNascimento: z.date({ message: "A data de nascimento deve ser uma data válida." }).optional(),
    situacaoServicoMilitar: z.string().nonempty().max(255, { message: "A situação do serviço militar deve ter entre 1 e 255 caracteres." }),
    validade: z.string().optional().transform(e =>  e &&e.length > 0 && new Date(e).toISOString().substring(0, 10)),
});

export default schemaSituacaoMilitar;
