import Escola from "./escola-interface";

export default interface Usuario {
    id: number;
    usuario: string;
    email: string;
    alcunha?: string;
    senha: string;
    bloqueado?: boolean;
    userSetor?: string;
    strDataHora?: Date;
    escolaId?: number;
    createdAt: Date;
    Escola?: Escola; // Assuming Escola interface is defined elsewhere
}