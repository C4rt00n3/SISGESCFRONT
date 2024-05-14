import { useEffect } from "react";
import Input from "../../components/inputs/Input-header";
import CardInformation from "../../components/card-infomations";
import NavBar from "../../components/nav-bar";
import { useHomeContext } from "../../contexts/home-provider-context";
import { BoxList, ConteinerHome, ItenListFunctions, ListInfo, MainHome } from "./styled";
import { FaPrint } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import TableAluno from "../../components/lists/list-alunos";


const functions = [
    {
        title: "Imprimir matticula",
        icon: <FaPrint />,
        text: "Total de matriculas: " + 212,
        updateAt: new Date()
    },
    {
        title: "Consultar boletin",
        icon: <TbReportAnalytics />,
        text: "Total de boletins: " + 212,
        updateAt: new Date()

    },
    {
        title: "Financeiro",
        icon: <FaMoneyBills />,
        text: "Cresimento de +12%",
        updateAt: new Date()

    }
]


export default function Home() {
    const { statistics, matriculas, fetchMatriculas } = useHomeContext()

    useEffect(() => {
        fetchMatriculas()
    }, [])

    const siglasMeses = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    return (
        <ConteinerHome>
            <NavBar />
            <MainHome>
                <div className="input-header">
                    <Input />
                </div>
                <>
                    {statistics && matriculas && (
                        <BoxList>
                            <ListInfo height="145px">
                                {Object.values(statistics).map((data, index) => (
                                    <li key={index}>
                                        <CardInformation title={data.title} total={data.total} />
                                    </li>
                                ))}
                            </ListInfo>
                            <ListInfo height="290px">
                                {
                                    functions.map(({ icon, title, text, updateAt }, index) => <ItenListFunctions key={index}>
                                        {icon}
                                        <h4>{title}</h4>
                                        <p>
                                            {text}
                                        </p>
                                        <small>Updated {updateAt.getDate()} {siglasMeses[updateAt.getUTCMonth()]}</small>
                                    </ItenListFunctions>)
                                }
                            </ListInfo>
                            {/* <NavLink to="/matricula">Fazer Matricula</NavLink> */}
                            {/* <ListGeneric /> */}
                        </BoxList>
                    )}
                    <TableAluno />
                </>
            </MainHome>
        </ConteinerHome>
    );
}