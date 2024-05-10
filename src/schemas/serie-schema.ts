import { z } from 'zod';
import { NivelEnsino } from '../interfaces/enums';

const schemaSerie =  z.object({
    nomeSerie: z.string().nonempty(),
    nivelEscolar: z.nativeEnum(NivelEnsino),
});

export default schemaSerie;
