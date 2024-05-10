import { z } from "zod";
import schemaSerie from "../../schemas/serie-schema";

type Type = z.infer<typeof schemaSerie>;

export default interface  iSerie extends Type {
    id: number;
}
