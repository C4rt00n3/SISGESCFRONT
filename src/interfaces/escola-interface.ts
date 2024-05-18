import { NivelEnsino } from "./enums";
import iEndereco from "./netwok-interface/endereco-interfade";

export default interface Escola {
    id: number;
    nome: string;
    nomeFantasia?: string;
    entidadeMantenedora?: string;
    secretaria?: string;
    cnpj: string;
    cadastroMEC?: string;
    fotoEscola?: string;
    nomeFotoEscola?: string;
    diretor?: string;
    secretario?: string;
    coordPedagogico?: string;
    email?: string;
    paginaRedeSocial?: string;
    docAutorizacaoDiretor?: string;
    docAutorizacaoSecretario?: string;
    nivel: NivelEnsino;
    enderecoId: number;
    endereco?: iEndereco;
    alunoTransferenciaId?: number;
}