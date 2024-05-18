// MatriculaScreen.tsx
import Input from "../../components/inputs/Input-header";
import FormMatricula from "../../components/from-matricula";
import NavBar from "../../components/nav-bar";
import { useMatriculaContext } from "../../contexts/matricula-provider-context";
import { BoxFunctions, BoxInfos, ConteinerMatricula, MainMatricula } from "./styled";
import { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useHomeContext } from "../../contexts/home-provider-context";
import iMatricula from "../../interfaces/netwok-interface/matricula-interface";
import MatriculaPDF from "../../components/pdf/matricula";
import { FaFilePdf } from "react-icons/fa6";

/**
 * Component for the Matricula screen.
 * This component renders the main layout of the screen, including the navigation bar, input components, and the matricula form.
 */
const Matricula = () => {
    const { id } = useParams();
    const { fields } = useMatriculaContext();
    const { fetchMatricula } = useHomeContext();
    const [matricula, setMatricula] = useState<iMatricula>();
    const location = useLocation();
    const path = location.pathname;
    // Busca a matrícula pelo ID apenas uma vez após a primeira renderização
    useEffect(() => {
        if (id) {
            const get = fetchMatricula(+id);
            setMatricula(get)
        }
    }, [fields, id]);
    // method="patch"
    // id={id ? +id : undefined}
    const defaultValues = (matricula ? {
        ...matricula,
        Aluno: {
            ...matricula?.Aluno,
            ...(matricula?.Aluno?.filiacao[0] && { filiacao1: matricula.Aluno.filiacao[0] }),
            ...(matricula?.Aluno?.filiacao[1] && { filiacao2: matricula.Aluno.filiacao[1] }),
        }
    } : null)

    return (
        <ConteinerMatricula>
            <NavBar />
            <MainMatricula>
                <Input />
                <BoxInfos className="form-container">
                    {
                        id && <BoxFunctions>
                            <NavLink to={`/matricula/pdf/${id}`}>
                                <FaFilePdf /> PDF
                            </NavLink>
                        </BoxFunctions>
                    }
                    {
                        (fields && fields.length > 0 && !path.includes("/matricula/pdf/")) && (
                            <FormMatricula
                                method={id ? "patch" : "post"}
                                fields={fields}
                                defaultValues={defaultValues}
                                id={Number(id) || undefined} />
                        )
                    }
                    {
                        path.includes("/matricula/pdf/") && <MatriculaPDF />
                    }
                </BoxInfos>
            </MainMatricula>
        </ConteinerMatricula>
    );
};

export default Matricula;