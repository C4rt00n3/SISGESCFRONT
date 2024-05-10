import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ListGeneric from "../list-generic";
import "./styled.css"
import NetWork from "../../utils/network";
import iMatricula from "../../interfaces/netwok-interface/matricula-interface";
import callToast from "../../utils/tosts";

interface iTag {
    name: string,
    actived: boolean,
    fun?: () => void,
    placeholder: string
}

const Input = () => {
    const [tags] = useState<iTag[]>([
        { name: "Alunos", actived: true, placeholder: "Nome do Aluno" },
        { name: "Matricula", actived: false, placeholder: "Numero dá matricula" },
        { name: "Filiação", actived: false, placeholder: "Nome da filiação" },
        { name: "Transporte", actived: false, placeholder: "Placa do transporte" }
    ]);
    const [openInput, setOpenInpit] = useState(false);
    const [matriculas, setMatriculas] = useState<iMatricula[]>([])

    const find = async (text: string) => {
        const api = new NetWork(`matricula/names/${text}`, 5000, {})
        await api.get({}).then(data => {
            setMatriculas((data as iMatricula[]).reverse())
        }).catch(() => {
            callToast("error")
        })
    }
    return (
        <div>
            <div className="box-input">
                {
                    !openInput && <>
                        <div className="box-button-input">
                            <button onClick={() => setOpenInpit((e) => !e)}>
                                <FaMagnifyingGlass />
                                <span>CTRL F</span>
                            </button>
                            <span>
                                Scot |
                            </span>
                        </div>
                        <div className="box-tags-input">
                            <span>
                                Search in:
                            </span>
                            <select name="items-find">
                                {tags.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)}
                            </select>
                        </div>
                    </>
                }
                {
                    openInput && <>
                        <div className="open-input">
                            <input onChange={(e) => find(e.target.value)} type="text" placeholder={(tags.find(e => e.actived == true))?.placeholder} />
                        </div>
                        <button onClick={() => {
                            setMatriculas([])
                            setOpenInpit((e) => !e)
                        }} className="button-x">X</button>
                    </>}
            </div>
            <div>
                {
                    matriculas.length > 0 && <ListGeneric></ListGeneric>
                }
            </div>
        </div>
    );
}



export default Input;
