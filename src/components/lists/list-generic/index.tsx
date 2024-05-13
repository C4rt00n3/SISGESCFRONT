import { IoOpenOutline } from "react-icons/io5"
import { useHomeContext } from "../../../contexts/home-provider-context"
import { ConteinerTable, ListTable, ListTableIten } from "./styled";
import { NavLink } from "react-router-dom";

const ListGeneric = () => {
    const { matriculas } = useHomeContext();
    
    return <ConteinerTable>
        <ListTable>
            {
                matriculas.map((e, i) =>
                    <ListTableIten key={i}>
                        <p>{e.Aluno.nome}</p>
                        <NavLink to={"/matricula/" + e.id}><IoOpenOutline /></NavLink>
                    </ListTableIten>
                )
            }
        </ListTable>
    </ConteinerTable>
}

export default ListGeneric