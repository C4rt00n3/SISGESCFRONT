import { z } from "zod";
import schemaLogin from "../../schemas/login-schema";


type Type = z.infer<typeof schemaLogin>;

export default interface iLogin extends Type { }
