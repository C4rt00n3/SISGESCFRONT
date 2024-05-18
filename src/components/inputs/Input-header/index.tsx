import { ChangeEvent, useEffect, useRef, useState } from "react";
import NetWork from "../../../utils/network";
import iMatricula from "../../../interfaces/netwok-interface/matricula-interface";
import callToast from "../../../utils/tosts";
import { BoxButtonInput, ButtonCloseInput, ButtonSearch, SearchBoxInput, SearchConteiner, SearchInputConteiner, SearchItenList, SearchResultContainer, SearchSelect, SerchInput, SpanButton } from "./styled";
import { NavLink } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface iTag {
    name: string,
    actived: boolean,
    fun?: () => void,
    placeholder: string,
    route: string
}

const RenderItensList = ({ matriculas }: { matriculas: iMatricula[], selectValue: string }) => {
    return <>
        {
            matriculas.map(({ id, Aluno: { nome } }, index) => {
                return <SearchItenList key={index}>
                    <p>{nome}</p>
                    <NavLink to={`/matricula/${id}`}><IoOpenOutline /></NavLink>
                </SearchItenList>
            })
        }
    </>
}

const Input = () => {
    const [tags] = useState<iTag[]>([
        { name: "Matricula", actived: false, placeholder: "Numero dá matricula", route: "matricula" },
        { name: "Alunos", actived: true, placeholder: "Nome do Aluno", route: "matricula" },
        { name: "Filiação", actived: false, placeholder: "Nome da filiação", route: "filiacaoAluno" },
        { name: "Transporte", actived: false, placeholder: "Placa do transporte", route: "transporte" }
    ]);
    const [openInput, setOpenInpit] = useState(false);
    const [matriculas, setMatriculas] = useState<iMatricula[]>([]);
    const [selectValue, setSelectValue] = useState<string>("matricula");
    const ref = useRef(null) as any;

    const find = async (text: string) => {
        if (text.length > 3) {
            const api = new NetWork(`${selectValue}/names/${text}`, 5000, {})
            await api.get({}).then(data => {
                setMatriculas((data as iMatricula[]).reverse())
            }).catch(() => {
                callToast("error")
            })
        }
    }

    const onSelectOnChage = (event: ChangeEvent<HTMLSelectElement>) => setSelectValue(event.target.value)

    const closeModal = () => {
        setOpenInpit(false)
        setMatriculas([])
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref?.current.contains(event.target))
            closeModal()
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div style={{ width: '100%', height: '60px', backgroundColor: 'var(--background)' }}>
            <SearchConteiner>
                <SearchInputConteiner>
                    {
                        !openInput && <>
                            <BoxButtonInput>
                                <ButtonSearch onClick={() => setOpenInpit((e) => !e)}>
                                    <FaMagnifyingGlass />
                                    <SpanButton>CTRL F</SpanButton>
                                </ButtonSearch>
                                <span>
                                    Scot |
                                </span>
                            </BoxButtonInput>
                            <BoxButtonInput>
                                <SearchSelect onChange={onSelectOnChage} name="items-find">
                                    {tags.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)}
                                </SearchSelect>
                            </BoxButtonInput>
                        </>
                    }
                    {
                        openInput && <>
                            <SearchBoxInput>
                                <SerchInput onChange={(e) => find(e.target.value)} type="text" placeholder={(tags.find(e => e.actived == true))?.placeholder} />
                            </SearchBoxInput>
                            <ButtonCloseInput onClick={() => {
                                setMatriculas([])
                                setOpenInpit((e) => !e)
                            }}>X</ButtonCloseInput>
                        </>}
                </SearchInputConteiner>
                {
                    matriculas.length > 0 && <SearchResultContainer ref={ref}>
                        <RenderItensList
                            matriculas={matriculas}
                            selectValue={selectValue}
                        />
                    </SearchResultContainer>
                }
            </SearchConteiner>
        </div>
    );
}

export default Input;
