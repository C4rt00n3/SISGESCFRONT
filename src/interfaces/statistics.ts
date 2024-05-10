interface iData {
    total: number;
    title: string;
} 

export default interface iStatistics {
    documentos: iData;
    alunos: iData;
    turmas: iData;
    filiacoesTotal: iData;
    transporte: iData;
}