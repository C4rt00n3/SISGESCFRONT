import { z } from "zod";

const schemaFiliacao = z.object({
  id: z.number().optional(),
  nome: z.string().nonempty(),
  celular: z.string()
  .nonempty()
  .transform(e => {
      return e.replace(/\D/g, '');
  }).refine( data => data.length === 11, {
      message: "O número não é valido."
  }),
  email: z.string().optional(),
  grauInstrucao: z.string().optional(),
  telefoneTrabalho: z.string()
  .transform(e => {
      return e.replace(/\D/g, '');
  }).refine( data => data.length === 11 || !data, {
      message: "O número não é valido."
  }),
  profissao: z.string().optional(),
  RG: z.string().optional(),
});

export { schemaFiliacao };