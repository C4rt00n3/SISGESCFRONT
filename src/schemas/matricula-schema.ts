import { z } from 'zod';
import schemaAluno from './aluno-schema';
import { NivelEnsino, Turno, iStatus } from '../interfaces/enums';

const schemaMatricula = z.object({
    anoLetivo: z.string().transform(e => Number(e)),
    nivel: z.nativeEnum(NivelEnsino).optional(),
    horasAnual: z.string().min(1).refine(value => value.trim() !== '', {
        message: 'Este campo é obrigatório',
        path: ['horasAnual'],
    }),
    frequencia: z.number().optional(),
    dataSaida: z.string().optional(),
    resultadoFinal: z.string().optional(),
    localFotoAluno: z.string().optional(),
    turno: z.nativeEnum(Turno),
    status: z.nativeEnum(iStatus).optional(),
    Aluno: schemaAluno
});

export default schemaMatricula;
