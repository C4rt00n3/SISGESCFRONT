import { z } from "zod";
import schemaSus from "../../schemas/sus-schema";

type Type = z.infer<typeof schemaSus>;

export default interface iSus extends Type{
    id: number
}
