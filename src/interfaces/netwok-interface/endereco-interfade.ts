import { z } from "zod";
import schemaEndereco from "../../schemas/endereco-schema";

type Type = z.infer<typeof schemaEndereco>;


export default interface iEndereco extends Type {
    id: number
};