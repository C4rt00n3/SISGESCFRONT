import { z } from "zod";

const schemaLogin = z.object({
    email: z.string().email().nonempty(),
    password: z.string().nonempty(),
})

export default schemaLogin