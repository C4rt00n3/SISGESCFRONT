import { NivelEnsino, Turno, iStatus, CorRaca, Sexo, GrauInstrucao, EstadoBrasil } from "../../../../interfaces/enums";
import InputFields from "../../../../interfaces/inputs-interface/input-fields";
import iSerie from "../../../../interfaces/netwok-interface/serie-interface";
import iTurma from "../../../../interfaces/netwok-interface/turma-interface";
import enumToArray from "../../../../utils/enum-to-array";
import NetWork from "../../../../utils/network";

/**
Esta função recebe um array de turmas e um array de séries e retorna um array de campos de input formatado para formulários.
Os campos são específicos para a criação de matrículas de alunos, incluindo informações pessoais, de endereço e documentos.
@param turmas Um array contendo as turmas disponíveis para seleção.
@param series Um array contendo as séries disponíveis para seleção.
@returns Um array de objetos contendo os campos de input formatados para utilização em formulários.
*/
const dataInputsMatricula = (turmas: iTurma[], series: iSerie[]): InputFields[] => {
    const currentYear = new Date().getFullYear();
    const years = [
        currentYear + "",
        (currentYear + 1) + "",
        (currentYear + 2) + "",
        (currentYear + 3) + ""
    ];
    const fields: InputFields[] = [
        {
            title: "Matrícula",
            nameForm: "",
            inputs: [
                {
                    label: 'Ano Letivo',
                    type: 'number',
                    name: 'anoLetivo',
                    selects: years.map(e => {
                        return {
                            value: e,
                            text: e
                        }
                    }),
                },
                {
                    label: 'Nível',
                    type: 'text',
                    name: "nivel",
                    selects: enumToArray(NivelEnsino).map((e,
                        i) => {
                        return {
                            value: e,
                            text: e
                        }
                    }),
                },
                {
                    label: 'Horas Anuais',
                    type: 'text',
                    placeholder: 'Horas Anuais',
                    name: "horasAnual",
                },
                {
                    label: 'Turno',
                    type: 'text',
                    name: "turno",
                    selects: enumToArray(Turno).map((e) => {
                        return {
                            value: e,
                            text: e
                        }
                    }),
                },
                {
                    label: 'Status',
                    type: 'text',
                    name: "status",
                    selects: enumToArray(iStatus).map((e) => {
                        return {
                            value: e,
                            text: e
                        }
                    }),
                },
            ],
            subForm: [
                {
                    title: "Dados do aluno",
                    nameForm: "Aluno",
                    inputs: [
                        {
                            label: "Turma",
                            name: "turmaId",
                            selects: turmas.map((e) => {
                                return {
                                    text: e.nome,
                                    value: e.id
                                }
                            }) || []
                        },
                        {
                            label: "Serie",
                            name: "serieId",
                            selects: series.map((e) => {
                                return {
                                    text: e.nomeSerie,
                                    value: e.id
                                }
                            }) || []
                        },
                        {
                            label: 'Nome',
                            type: 'text',
                            inputWidth: "300px",
                            name: "nome",
                        },
                        {
                            name: "celularAluno",
                            label: 'Numero de telefone',
                            type: 'text',
                            mask: "phone",
                        },
                        {
                            name: "email",
                            label: 'Email',
                            type: 'email',
                            inputWidth: "300px",
                        },
                        {
                            label: 'Área de Proteção Governamental',
                            type: 'text',
                            name: "areaProtecaoGov",
                        },
                        {
                            label: 'Cor/Raça',
                            type: 'text',
                            name: "corRaca_Aluno",
                            selects: enumToArray(CorRaca).map((e,
                                i) => {
                                return {
                                    value: e,
                                    text: e
                                }
                            })
                        },
                        {
                            label: 'Sexo',
                            name: "sexo",
                            selects: enumToArray(Sexo).map((e,
                                i) => {
                                return {
                                    value: e,
                                    text: e
                                }
                            })
                        }
                    ],
                    subForm: [
                        {
                            title: 'Filiação',
                            nameForm: 'filiacao1',
                            inputs: [
                                {
                                    name: 'nome',
                                    label: 'Nome',
                                    type: 'text',
                                    placeholder: 'Digite o nome'
                                },
                                {
                                    name: 'celular',
                                    label: 'Celular',
                                    type: 'tel',
                                    mask: "phone",
                                    placeholder: 'Digite o celular'
                                },
                                {
                                    name: 'email',
                                    label: 'Email',
                                    type: 'email',
                                    placeholder: 'Digite o email',
                                },
                                {
                                    name: 'grauInstrucao',
                                    label: 'Grau de Instrução',
                                    type: 'text',
                                    selects: enumToArray(GrauInstrucao).map(e => {
                                        return {
                                            text: e,
                                            value: e
                                        }
                                    })
                                },
                                {
                                    name: 'telefoneTrabalho',
                                    label: 'Telefone Trabalho',
                                    type: 'text',
                                    placeholder: 'Digite o telefone do trabalho'
                                },
                                {
                                    name: 'profissao',
                                    label: 'Profissão',
                                    type: 'text',
                                    placeholder: 'Digite a profissão'
                                },
                                {
                                    name: 'RG',
                                    label: 'RG',
                                    type: 'text',
                                    placeholder: 'Digite o RG'
                                },
                            ]
                        },
                        {
                            title: 'Filiação +1',
                            nameForm: 'filiacao2',
                            inputs: [
                                {
                                    name: 'nome',
                                    label: 'Nome',
                                    type: 'text',
                                    placeholder: 'Digite o nome'
                                },
                                {
                                    name: 'celular',
                                    label: 'Celular',
                                    type: 'tel',
                                    mask: "phone",
                                    placeholder: 'Digite o celular'
                                },
                                {
                                    name: 'email',
                                    label: 'Email',
                                    type: 'email',
                                    placeholder: 'Digite o email',
                                },
                                {
                                    name: 'grauInstrucao',
                                    label: 'Grau de Instrução',
                                    type: 'text',
                                    selects: enumToArray(GrauInstrucao).map(e => {
                                        return {
                                            text: e,
                                            value: e
                                        }
                                    })
                                },
                                {
                                    name: 'telefoneTrabalho',
                                    label: 'Telefone Trabalho',
                                    type: 'text',
                                    placeholder: 'Digite o telefone do trabalho'
                                },
                                {
                                    name: 'profissao',
                                    label: 'Profissão',
                                    type: 'text',
                                    placeholder: 'Digite a profissão'
                                },
                                {
                                    name: 'RG',
                                    label: 'RG',
                                    type: 'text',
                                    placeholder: 'Digite o RG'
                                },
                            ],
                            inputCheckbox: {
                                text: "Não possui",
                                open: true,
                            },
                        },
                        {
                            title: 'Endereço',
                            nameForm: "Endereco",
                            inputs: [
                                {
                                    name: 'logradouro',
                                    label: 'Logradouro do endereço',
                                    type: 'text',
                                    placeholder: 'Digite o logradouro',
                                },
                                {
                                    name: 'numero',
                                    label: 'Número do endereço',
                                    type: 'text',
                                    placeholder: 'Digite o número',
                                },
                                {
                                    name: 'complemento',
                                    label: 'Complemento do endereço',
                                    type: 'text',
                                    placeholder: 'Digite o complemento',
                                },
                                {
                                    name: 'bairro',
                                    label: 'Bairro do endereço',
                                    type: 'text',
                                    placeholder: 'Digite o bairro',
                                },
                                {
                                    name: 'cidade',
                                    label: 'Cidade do endereço',
                                    type: 'text',
                                    placeholder: 'Digite a cidade',
                                },
                                {
                                    name: 'estado',
                                    label: 'Estado do endereço',
                                    type: 'text',
                                    placeholder: 'Digite o estado',
                                    selects: enumToArray(EstadoBrasil).map(e => {
                                        return {
                                            value: e,
                                            text: e
                                        }
                                    })
                                },
                                {
                                    name: 'cep',
                                    label: 'CEP do endereço',
                                    type: 'text',
                                    placeholder: 'Digite o CEP',
                                    mask: "cep"
                                }
                            ]
                        },
                        {
                            title: "Documentos do Aluno",
                            nameForm: "Documentos",
                            inputs: [
                                {
                                    name: "livro",
                                    label: 'Número de Registro',
                                    type: 'number',
                                },
                                {
                                    name: "folha",
                                    label: 'Número da Folha',
                                    type: 'text',
                                },
                            ],
                            subForm: [
                                {
                                    nameForm: "SUS",
                                    title: "Dados do SUS",
                                    inputs: [
                                        {
                                            name: "nome",
                                            label: 'Nome',
                                            type: 'text',
                                        },
                                        {
                                            label: 'Data de Nascimento',
                                            type: 'date',
                                            name: "nascimento",
                                        },
                                        {
                                            label: 'Sexo',
                                            name: "sexo",
                                            selects: enumToArray(Sexo).map((e,
                                                i) => {
                                                return {
                                                    value: e,
                                                    text: e
                                                }
                                            })
                                        },
                                        {
                                            label: 'Número do SUS',
                                            type: 'text',
                                            name: "numero",
                                            mask: "sus"
                                        },
                                    ]
                                },
                                {
                                    title: 'Dados do RG',
                                    nameForm: "RG",
                                    inputs: [
                                        {
                                            label: 'Número do RG',
                                            type: 'text',
                                            placeholder: 'Número do RG',
                                            name: "rgNumero",
                                        },
                                        {
                                            label: 'Número do CPF',
                                            type: 'text',
                                            placeholder: 'Número do CPF',
                                            name: "cpf",
                                            mask: "cpf"
                                        },
                                        {
                                            label: 'Data de expedição do RG',
                                            type: 'date',
                                            placeholder: 'Data de expedição do RG',
                                            name: "dataExpedicao",
                                        },
                                        {
                                            label: 'Data de nascimento',
                                            type: 'date',
                                            placeholder: 'Data de nascimento',
                                            name: "dataNascimento",
                                        },
                                        {
                                            label: 'Órgão emissor do RG',
                                            type: 'text',
                                            placeholder: 'Órgão emissor do RG',
                                            name: "orgaoEmissor",
                                        },
                                        {
                                            label: 'UF do RG',
                                            type: 'text',
                                            name: "UF",
                                            selects: enumToArray(EstadoBrasil).map((e,
                                                i) => {
                                                return {
                                                    value: e,
                                                    text: e
                                                }
                                            })
                                        },
                                        {
                                            label: 'Nome da mãe',
                                            type: 'text',
                                            placeholder: 'Nome da mãe',
                                            name: "mae",
                                        },
                                        {
                                            label: 'Nome do pai',
                                            type: 'text',
                                            placeholder: 'Nome do pai',
                                            name: "pai",
                                        },
                                        {
                                            label: 'Naturalidade',
                                            type: 'text',
                                            placeholder: 'Naturalidade',
                                            name: "naturalidade",
                                        },
                                        {
                                            label: 'Documento de origem',
                                            type: 'text',
                                            placeholder: 'Documento de origem',
                                            name: "docOrigem",
                                        },
                                    ],
                                },
                                {
                                    nameForm: "SituacaoMilitar",
                                    title: 'Situação Militar',
                                    inputCheckbox: {
                                        text: "Não possui",
                                        open: true,
                                    },
                                    inputs: [
                                        {
                                            label: 'Tipo de documento',
                                            type: 'text',
                                            name: "tipoDeDocumento",
                                        },
                                        {
                                            label: 'RA',
                                            type: 'text',
                                            name: "ra",
                                            mask: "ra"
                                        },
                                        {
                                            label: 'CPF',
                                            type: 'text',
                                            name: "cpf",
                                            mask: "cpf"
                                        },
                                        {
                                            label: 'Nome completo',
                                            type: 'text',
                                            name: "nome",
                                        },
                                        {
                                            label: 'Nome completo do pai',
                                            type: 'text',
                                            name: "pai",
                                        },
                                        {
                                            label: 'Nome completo da mãe',
                                            type: 'text',
                                            name: "mae",
                                        },
                                        {
                                            label: 'Local de nascimento',
                                            type: 'text',
                                            name: "localNascimento",
                                        },
                                        {
                                            label: 'Data de nascimento',
                                            type: 'date',
                                            name: "dataNascimento",
                                        },
                                        {
                                            label: 'Situação do serviço militar',
                                            type: 'text',
                                            name: "situacaoServicoMilitar",
                                        },
                                        {
                                            label: 'Validade do documento',
                                            type: 'date',
                                            name: "validade",
                                        }
                                    ],
                                },
                                {
                                    title: 'Titulo Eleitor',
                                    nameForm: "TituloEleitor",
                                    inputCheckbox: {
                                        text: "Não possui",
                                        open: true,
                                    },
                                    inputs: [
                                        {
                                            label: 'Nome completo',
                                            type: 'text',
                                            inputWidth: "300px",
                                            name: "nome"
                                        },
                                        {
                                            label: 'Número de inscrição',
                                            type: 'text',
                                            name: "inscricao",
                                            mask: "te"
                                        },
                                        {
                                            label: 'Data de nascimento',
                                            type: 'date',
                                            name: "dataNascimento"
                                        },
                                        {
                                            label: 'Data de emissão',
                                            type: 'date',
                                            name: "dataEmissao"
                                        },
                                        {
                                            label: 'Nome completo do pai',
                                            type: 'text',
                                            inputWidth: "250px",
                                            name: "pai"
                                        },
                                        {
                                            label: 'Nome completo da mãe',
                                            type: 'text',
                                            inputWidth: "250px",
                                            name: "mae"
                                        },
                                        {
                                            label: 'Número da zona eleitoral',
                                            type: 'number',
                                            inputWidth: "100px",
                                            name: "zona",
                                        },
                                        {
                                            label: 'Número da seção eleitoral',
                                            type: 'number',
                                            inputWidth: "100px",
                                            name: "secao",
                                        },
                                    ],
                                },
                            ]
                        },
                        {
                            nameForm: "Convenio",
                            title: 'Convenio',
                            inputCheckbox: {
                                text: "Aluno não possui o covenio",
                                open: true,
                            },
                            inputs: [
                                {
                                    name: 'nome',
                                    label: 'Nome do convênio',
                                    type: 'text',
                                    placeholder: 'Digite o nome do convênio',
                                },
                                {
                                    name: 'descricao',
                                    label: 'Descrição do convênio',
                                    type: 'text',
                                    placeholder: 'Digite a descrição do convênio',
                                },
                                {
                                    name: 'dataInicio',
                                    label: 'Data de início do convênio',
                                    type: 'date',
                                    placeholder: 'Selecione a data de início do convênio',
                                },
                                {
                                    name: 'dataFim',
                                    label: 'Data de fim do convênio',
                                    type: 'date',
                                    placeholder: 'Selecione a data de fim do convênio',
                                },
                                {
                                    name: 'ativo',
                                    label: 'Convênio ativo',
                                    type: 'select',
                                    placeholder: 'Selecione o status do convênio',
                                    selects: [{
                                        value: "true",
                                        text: "Sim"
                                    },
                                    {
                                        value: "false",
                                        text: "Não"
                                    }],
                                },
                            ],
                        }
                    ]
                },
            ]
        },
    ];

    return fields
}

/**
 * Fetches all turmas and series from the API.
 * @returns A tuple containing the fetched turmas and series.
 */
const fetchTurmasAndSeries = async (): Promise<InputFields[]> => {
    const api = new NetWork("turma", 5000, {});
    const turmas = await api.getAll({}) as iTurma[];
    const series = await api.getAll({ route: "serie" }) as iSerie[];

    return dataInputsMatricula(turmas, series)
};

export default fetchTurmasAndSeries
