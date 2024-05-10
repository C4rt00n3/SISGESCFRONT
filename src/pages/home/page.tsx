import { useEffect } from "react";
import Input from "../../components/Input-header";
import ButtonGeneric from "../../components/button-generic";
import CardInformation from "../../components/card-infomations";
import ListGeneric from "../../components/list-generic";
import NavBar from "../../components/nav-bar";
import { useHomeContext } from "../../contexts/home-provider-context";
import "./styled.css";


export default function Home() {
    const {statistics, matriculas, fetchMatriculas} = useHomeContext()
    const getColor = (i: number): string => {
        return ["#F52000", "#14F71F", "var(--pink)", "var(--pink)", "var(--pink)"][i];
    };

    useEffect(()=> {
        fetchMatriculas()
    },[])

    return (
        <div className="conteiner-main">
            <NavBar />
            <main>
                <Input />
                {statistics && matriculas && (
                    <div className="box-lists">
                        <ul className="list-info">
                            {Object.values(statistics).map((data, index) => (
                                <li key={index}>
                                    <CardInformation title={data.title} total={data.total} color={getColor(index)} />
                                </li>
                            ))}
                        </ul>
                        <div className="conteiner-button">
                            <ButtonGeneric type="submit" text="Fazer Matricula" />
                        </div>
                        <ListGeneric />
                    </div>
                )}
            </main>
        </div>
    );
}