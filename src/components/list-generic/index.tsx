import { IoOpenOutline } from "react-icons/io5"
import { useHomeContext } from "../../contexts/home-provider-context"
import "./styled.css"

const ListGeneric = () => {
    const { matriculas, navigation } = useHomeContext();
    
    return <div className="table">
        <ul>
            {
                matriculas.map((e, i) =>
                    <li key={i}>
                        <p>{e.Aluno.nome}</p>
                        <button onClick={() => navigation("matricula/" + e.id)}><IoOpenOutline /></button>
                    </li>
                )
            }
        </ul>
    </div>
}

export default ListGeneric