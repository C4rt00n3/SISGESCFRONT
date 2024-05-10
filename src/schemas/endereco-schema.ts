import { z } from 'zod';
import { EstadoBrasil } from '../interfaces/enums';

const schemaEndereco = z.object({
    logradouro: z.string().nonempty(),
    numero: z.string().nonempty(),
    complemento: z.string().optional(),
    bairro: z.string().nonempty(),
    cidade: z.string().nonempty(),
    estado: z.nativeEnum(EstadoBrasil),
    cep: z.string()
        .nonempty()
        .transform(e => e.replace(/\D/g, ''))
        .refine(e => e.length === 8, {
            message: "CEP deve ter 8 caracteres"
        })
});

export default schemaEndereco;
