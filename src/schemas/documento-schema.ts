import { z } from "zod";
import schemaSus from "./sus-schema";
import schemaRg from "./rg-interface";
import schemaSituacaoMilitar from "./situacao-militar-schema";
import schemaTituloEleitor from "./titulo-schema";

const schemaDocumento = z.object({
    livro: z.string().optional(),
    folha: z.string().optional(),
    SUS: schemaSus,
    RG: schemaRg,
    SituacaoMilitar: z.union([
        schemaSituacaoMilitar,
        z.boolean(),
    ]).optional().transform(e => {
        if (typeof e == "boolean") {
            return null
        }
        return e
    }),
    TituloEleitor: z.union([
        schemaTituloEleitor,
        z.boolean(),
    ]).optional().transform(e => {
        if (typeof e == "boolean") {
            return null
        }
        return e
    })
}).transform(e => {
    if(!e.SituacaoMilitar)
        delete e.SituacaoMilitar;
    if(!e.TituloEleitor)
        delete e.TituloEleitor;
    if(!e.TituloEleitor)
        delete e.TituloEleitor;
    if(!e.SituacaoMilitar)
        delete e.SituacaoMilitar;
    return e
});

export default schemaDocumento;
