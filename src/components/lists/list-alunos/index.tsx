import { VscSettings } from "react-icons/vsc";
import { BoxTableItens, BoxUser, ConteinerTable, FormFilter, ThreadTable, TitleTable } from "./styled"
import EllipseUser from "../../../icons/EllipseUser";
import IconCircleArrow from "../../../icons/IconCircleArrow";
import { TbPointFilled, TbSunset2 } from "react-icons/tb";
import iMatricula from "../../../interfaces/netwok-interface/matricula-interface";
import { AiFillLike } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { useHomeContext } from "../../../contexts/home-provider-context";
import { Turno, iStatus } from "../../../interfaces/enums";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
import { iDocumento } from "../../../interfaces/netwok-interface/doc-interface";
import enumToArray from "../../../utils/enum-to-array";

/**
 * Interface para os filtros da tabela de alunos
 */
interface Filter {
    open: boolean;
    status?: string;
    turno?: string;
    pendencias?: boolean;
}

/**
 * Componente que exibe a tabela de alunos com filtros
 */
const TableAluno = () => {
    const { matriculas } = useHomeContext();
    const [filters, setFilters] = useState<Filter>({ open: false });
    const [filtered, setFiltered] = useState(matriculas);
    const { open, status, turno, pendencias } = filters;

    // Aplica os filtros quando os dados ou os filtros são alterados
    useEffect(() => {
        applyFilters();
    }, [filters, matriculas]);

    /**
     * Aplica os filtros aos dados da tabela
     */
    const applyFilters = () => {

        const checkPen = ({ RG, SituacaoMilitar, TituloEleitor, SUS }: iDocumento) => {
            if (RG && SituacaoMilitar && TituloEleitor && SUS)
                return true;
            return false;
        };

        if (open) {
            const filteredData = matriculas.filter((m) => {
                let match = true;
                if (status && m.status !== status) {
                    match = false;
                }
                if (turno && m.turno !== turno) {
                    match = false;
                }
                if (pendencias !== undefined && checkPen(m.Aluno.Documentos as iDocumento) !== pendencias) {
                    match = false;
                }
                return match;
            });
            setFiltered(filteredData);
        } else {
            setFiltered(matriculas);
        }
    };

    const onPend = (value: string) => {
        setFilters({ ...filters, pendencias: (value != 'null') ? (value == 'true' && value) as boolean : undefined })
    }

    function onChange<T extends Record<string, string | number>>(enumObj: T, value: string, key: 'status' | 'turno') {
        const enumValues = enumToArray(enumObj);
        const res = { ...filters }; // Cria uma cópia do estado atual

        res[key] = enumValues.includes(value) ? value : undefined;
        setFilters(res); // Atualiza o estado com a nova cópia
    }

    return (
        <ConteinerTable>
            <TitleTable>Alunos</TitleTable>
            <ThreadTable columns={6}>
                <div className="settings">
                    <p>26 Dec 2024</p>
                    <Tooltip anchorSelect="#clickable" clickable>
                        <FormFilter>
                            <div className="check-box">
                                <label id="check">Filtro ativo</label>
                                <input
                                    type='checkbox'
                                    checked={open}
                                    onChange={(event) => {
                                        setFilters({ open: event.target.checked })
                                    }}
                                />
                            </div>
                            <div>
                                <label id="status">Status</label>
                                <select value={status} onChange={({ target: { value } }) => onChange(iStatus, value, 'status')} name="status" id="status">
                                    <option value="null">Todos</option>
                                    <option value="ATIVO">ATIVO</option>
                                    <option value="EM_ANDAMENTO">EM_ANDAMENTO</option>
                                    <option value="DESATIVADO">DESATIVADO</option>
                                </select>
                            </div>
                            <div>
                                <label id="turno">Turno</label>
                                <select value={turno} onChange={({ target: { value } }) => onChange(Turno, value, 'turno')} name="turno" id="turno">
                                    <option value="null">Todos</option>
                                    <option value="Matutino">Matutino</option>
                                    <option value="Vespertino">Vespertino</option>
                                    <option value="Noturno">Noturno</option>
                                </select>
                            </div>
                            <div>
                                <label id="pendecias">Pedencias</label>
                                <select value={pendencias + ""} onChange={({ target: { value } }) => onPend(value)} name="pendecias" id="pendecias">
                                    <option value="null">Todos</option>
                                    <option value="true">Sim</option>
                                    <option value="false">Não</option>
                                </select>
                            </div>
                        </FormFilter>
                    </Tooltip>
                    <VscSettings id="clickable" />
                </div>
                <p>CHECK IN</p>
                <p>CHECK OUT</p>
                <p>Turno</p>
                <p>Pendências</p>
                <p>Status</p>
            </ThreadTable>
            <BoxTableItens columns={6}>
                {filtered.map((m, i) => <AlunoItem key={i} matricula={m} />)}
            </BoxTableItens>
        </ConteinerTable >
    );
};

/**
 * Componente para exibir o ícone de turno com base no valor
 * @param turno O valor do turno
 */
const TurnoComp = ({ turno }: { turno: Turno }) => {
    if (turno == 'Matutino')
        return <TbSunset2 style={{ color: '#E7B416' }} />;
    else if (turno == 'Vespertino')
        return <IoSunny />;
    else
        return <IoMoonSharp style={{ color: '#7B809A' }} />;
};

/**
 * Componente para exibir um item de aluno na tabela
 * @param matricula Os dados da matrícula do aluno
 */
const AlunoItem = ({
    matricula: {
        anoLetivo,
        status,
        turno,
        Aluno: {
            nome,
            Documentos: {
                RG,
                TituloEleitor,
                SituacaoMilitar,
                SUS
            }
        }
    }
}: { matricula: iMatricula }) => {
    return (
        <li>
            <BoxUser>
                <EllipseUser />
                <div>
                    <p>{nome}</p>
                    <small>{anoLetivo}</small>
                </div>
            </BoxUser>
            <p><IconCircleArrow rotate={225} /> 9:36</p>
            <p><IconCircleArrow rotate={45} /> 11:36</p>
            <p className="turno"><TurnoComp turno={turno} /></p>
            <p className="turno">
                {(RG && SituacaoMilitar && TituloEleitor && SUS) ? <AiFillLike fill="var(--green-sucess)" /> : <RiErrorWarningFill fill="var(--danger-color)" />}
            </p>
            <p>
                {status == "EM_ANDAMENTO" && <TbPointFilled fill="var(--brand-color)" />}
                {status == "ATIVO" && <TbPointFilled fill="var(--green-sucess)" />}
                {status == "DESATIVADO" && <TbPointFilled fill="var(--danger-color)" />}
            </p>
        </li>
    );
};

export default TableAluno;
