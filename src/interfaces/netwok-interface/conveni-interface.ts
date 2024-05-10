import { z } from "zod";
import schemaConvenio from "../../schemas/convenio-schema";

type Type = z.infer<typeof schemaConvenio>;

export default interface iConvenio extends Type {
    id: number
};
