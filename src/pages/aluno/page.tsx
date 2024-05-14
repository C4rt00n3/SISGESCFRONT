// import { FaPrint } from "react-icons/fa";
import Input from "../../components/inputs/Input-header";
import NavBar from "../../components/nav-bar";
import { ConteinerAluno, ListFuctions, MainConteiner } from "./styled"
// import { TbReportAnalytics } from "react-icons/tb";
// import { FaMoneyBills } from "react-icons/fa6";


const AlunoPage = () => {
    return <ConteinerAluno>
        <NavBar />
        <MainConteiner>
            <Input />
            <ListFuctions>
                {
                    // functions.map(({title, icon}, index) => <ItenListFunction key={index}>
                    //     {icon}
                    //     <p>{title}</p>
                    // </ItenListFunction>)
                }
            </ListFuctions>
        </MainConteiner>
    </ConteinerAluno>
}

export default AlunoPage;