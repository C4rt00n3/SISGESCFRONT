import { Document, Page, View, Text } from "@react-pdf/renderer";
import Usuario from "../../../interfaces/user-interface";
import iMatricula from "../../../interfaces/netwok-interface/matricula-interface";
import iFiliacao from "../../../interfaces/netwok-interface/filiacao-interface";
import styles from "./styles";

const CampAndText = ({ campName, text }: { campName: string, text?: string }) => {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: "row", gap: "4px" }}>
            <Text style={{ fontSize: '12px', fontWeight: 'bold' }}>{campName}</Text>
            <Text style={{ fontWeight: "normal", fontSize: '10px' }}>{text}</Text>
        </View>
    );
}

const BlockDadosAluno = ({ matricula }: { matricula: iMatricula }) => {
    return (
        <View style={styles.box}>
            <View style={styles.lineText}>
                <CampAndText campName="Nome do aluno:" text={matricula?.Aluno?.nome} />
                <CampAndText campName="MATRÍCULA Nº" text={matricula?.id?.toString()} />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName="Data de nasc.:" text={formatDate(matricula?.Aluno?.Documentos?.SUS?.nascimento || '')} />
                <CampAndText campName="Cor:" text={matricula?.Aluno?.corRaca_Aluno} />
                <CampAndText campName="Local nasc:" text={matricula?.Aluno?.Documentos?.SituacaoMilitar?.localNascimento} />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName="Endereço:" text={`${matricula?.Aluno?.Endereco?.logradouro} - ${matricula?.Aluno?.Endereco?.cidade}`} />
                <CampAndText campName="Nº" text={matricula?.Aluno?.Endereco?.numero?.toString()} />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName="Bairro:" text={matricula?.Aluno?.Endereco?.bairro} />
                <CampAndText campName="Município:" text={matricula?.Aluno?.Endereco?.cidade} />
                <CampAndText campName="UF:" text={matricula?.Aluno?.Endereco?.estado} />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName="RG:" text={matricula?.Aluno?.Documentos?.RG?.rgNumero} />
                <CampAndText campName="Dta. Emissão:" text={formatDate(matricula?.Aluno?.Documentos?.RG?.dataExpedicao || '')} />
                <CampAndText campName="Termo:" text='' />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName="Cer. Nasc. Matrícula:" text='' />
                <CampAndText campName="Livro:" text={matricula?.Aluno?.Documentos?.livro} />
                <CampAndText campName="FL:" text={`${matricula?.Aluno?.Documentos?.folha || ""}`} />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName="E-mail:" text={matricula?.Aluno?.email} />
                <CampAndText campName="Nis:" text='' />
            </View>
        </View>
    );
}

const DataFiliacao = ({ filiacao, fatherOrMother }: { filiacao: iFiliacao, fatherOrMother: boolean }) => {
    return (
        <View>
            <View style={styles.lineText}>
                <CampAndText campName={fatherOrMother ? "MÃE:" : "PAI:"} text={filiacao.nome} />
                <CampAndText campName="Profissão:" text={filiacao.profissao} />
                <CampAndText campName="Celular:" text={filiacao.celular} />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName="Grau de instrução:" text={filiacao.grauInstrucao} />
                <CampAndText campName="Local de trabalho:" text={filiacao.profissao} />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName="Tel. do trabalho" text={filiacao.telefoneTrabalho} />
                <CampAndText campName="Local de trabalho:" text={filiacao.profissao} />
                <CampAndText campName="E-mail:" text={filiacao.email} />
            </View>
        </View>
    );
}

const BlockFiliacao = ({ filiacoes }: { filiacoes: iFiliacao[] }) => {
    return (
        <View style={styles.box}>
            {filiacoes.map((filiacao, i) => (
                <DataFiliacao filiacao={filiacao} fatherOrMother={i === 0} key={i} />
            ))}
        </View>
    );
}

const BlockSaude = ({ matricula }: { matricula?: iMatricula }) => {
    return (
        <View style={styles.box}>
            <View style={styles.lineText}>
                <CampAndText campName='DADOS DA MATRÍCULA DO ALUNO' />
                <CampAndText campName='Transporte:' text="#None" />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName='Ano Letivo:' text={`${matricula?.anoLetivo || "#None"}`} />
                <CampAndText campName='Ano/Turma:' text={matricula?.Aluno.Serie.nomeSerie} />
                <CampAndText campName='Turno:' text={matricula?.turno} />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName='Pessoa Autorizada para representar o Responsável Legal em sua ausência.' />
            </View>
            <View style={styles.lineText}>
                <CampAndText campName='Nome:' text="#None" />
                <CampAndText campName='Parentesco:' text="#None" />
                <CampAndText campName='Telefone:' text="#None" />
            </View>
        </View>
    );
}

const BlockTermo = () => {
    return (
        <View style={styles.box}>
            <Text style={{ width: '100%', fontSize: "14px", fontWeight: "bold", textAlign: "center" }}>
                TERMO DE RESPONSABILIDADE
            </Text>
            <Text style={{ width: '100%', fontSize: "14px", fontWeight: "bold", textAlign: "center" }}>
                Comprometemo-nos pelo zelo e preservação do patrimônio desta Escola: Prédio, muros, salas, áreas
                de circulação, sanitários, mobiliários, equipamentos e outros bens, responsabilizando-nos pela
                reparação de quaisquer danos e ou prejuízos eventualmente causados pelo matriculado.
            </Text>
        </View>
    );
}

const Header = ({ user }: { user: Usuario }) => {
    return <View style={styles.section}>
        <Text style={styles.prefeitura}>{user?.Escola?.entidadeMantenedora}</Text>
        <Text style={{ ...styles.prefeitura, fontWeight: "light" }}>{user?.Escola?.secretaria}</Text>
        <Text style={styles.prefeitura}>{user?.Escola?.nome}</Text>
        <Text style={styles.addrres}>CEP: {user?.Escola?.endereco?.cep}, {user?.Escola?.endereco?.logradouro}, {user?.Escola?.endereco?.numero} - Cidade: {user?.Escola?.endereco?.cidade}</Text>
        <Text style={styles.addrres}>C.N.P.J.: {user?.Escola?.cnpj} - Cad. MEC: {user?.Escola?.cadastroMEC}</Text>
        <Text style={{ ...styles.prefeitura, marginVertical: '12px' }}>REQUERIMENTO DE MATRÍCULA</Text>
    </View>
}

const BlockAsinatura = ({ user }: { user: Usuario }) => {
    return (
        <View style={{ display: "flex", flexDirection: 'row' }}>
            <View style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                <Text style={styles.assnatura}>
                    {`${user?.Escola?.endereco?.cidade} - ${user?.Escola?.endereco?.estado}, ${formatDate(new Date().toString())}`}
                </Text>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ width: "47.5%", border: "1px solid black" }} />
                    <View style={{ width: "47.5%", border: "1px solid black" }} />
                </View>
                <View>
                    <View style={{ width: "calc(50% - 18px)", border: "1px solid black", marginLeft: "12px", marginTop: "8px" }} />
                </View>
                <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>
                    <Text style={{ fontSize: "9px", marginTop: '9px', fontWeight: "bold", width: '47.5%', textAlign: 'center' }}>Assinatura do Aluno(Caso Maior)</Text>
                    <Text style={{ fontSize: "9px", marginTop: '9px', fontWeight: "bold", width: '47.5%', textAlign: 'center' }}>Assinatura Responsável</Text>
                </View>
            </View>
        </View>
    );
}

const formatDate = (dateString?: string) => {
    const date = new Date(dateString || '');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const BlockData = () => {
    return <View style={{ border: "1px solid black", padding: "11px", width: "calc(50% - 16px)", marginLeft: "50%", marginTop: "18px" }}>
        <Text style={{ fontSize: "11px", width: '100%', textAlign: 'center' }}>
            Matricula au torizada em: ___ _ / ______ /2024.
        </Text>
        <View style={{ width: "95%", marginLeft: '2.5%', marginVertical: "12px", border: "1px solid black", height: "1px" }}></View>
        <Text style={{ fontSize: "11px", width: '100%', textAlign: 'center' }}>
            #Tipo!
        </Text>
    </View>
}

const DocumentoPDF = ({ user, matricula }: { user: Usuario, matricula: iMatricula }) => {
    return (
        <Document>
            <Page style={styles.body}>
                <Header user={user} />
                <BlockDadosAluno matricula={matricula} />
                <BlockFiliacao filiacoes={matricula.Aluno?.filiacao} />
                <BlockSaude matricula={matricula} />
                <BlockTermo />
                <BlockAsinatura user={user} />
                <BlockData />
            </Page>
        </Document>
    );
}

export default DocumentoPDF;
