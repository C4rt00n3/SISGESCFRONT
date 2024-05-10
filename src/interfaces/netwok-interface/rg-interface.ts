import { z } from "zod";
import schemaRg from "../../schemas/rg-interface";

type Type = z.infer<typeof schemaRg>;

export default interface iRg extends Type {
    id: number
}
