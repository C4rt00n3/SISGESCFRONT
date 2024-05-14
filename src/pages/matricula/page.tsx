// MatriculaScreen.tsx
import Input from "../../components/inputs/Input-header";
import FormMatricula from "../../components/from-matricula";
import NavBar from "../../components/nav-bar";
import { useMatriculaContext } from "../../contexts/matricula-provider-context";
import { ConteinerMatricula, MainMatricula } from "./styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHomeContext } from "../../contexts/home-provider-context";
import iMatricula from "../../interfaces/netwok-interface/matricula-interface";
import NetWork from "../../utils/network";
import callToast from "../../utils/tosts";


/**
 * Component for the Matricula screen.
 * This component renders the main layout of the screen, including the navigation bar, input components, and the matricula form.
 */
const Matricula = () => {
    const { id } = useParams();
    const { fields } = useMatriculaContext();
    const { matriculas } = useHomeContext();
    const [matricula, setMatricula] = useState<iMatricula>();

    // Busca a matrícula pelo ID apenas uma vez após a primeira renderização
    useEffect(() => {
        const fetch = async (id: number) => {
            const api = new NetWork("matricula", 5000, { id })
            return await api.getWithId({ id })
        }
        const findMatricula = matriculas.find(e => e.id == Number(id));

        if (!findMatricula && id)
            fetch(+id).then(matricula => {
                setMatricula({
                    ...matricula,
                    Aluno: {
                        ...matricula.Aluno,
                        ...(matricula.Aluno?.filiacao[0] && { filiacao1: matricula.Aluno.filiacao[0] }),
                        ...(matricula.Aluno?.filiacao[1] && { filiacao2: matricula.Aluno.filiacao[1] }),
                    }
                })
            }).catch(error => {
                callToast("error", error.response?.data?.message)
                throw error
            })
        else
            setMatricula(findMatricula)
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
                <div className="form-container">
                    {
                        (fields && fields.length > 0) && <FormMatricula
                            method={id ? "patch" : "post"}
                            fields={fields}
                            defaultValues={defaultValues} />
                    }
                </div>
            </MainMatricula>
        </ConteinerMatricula>
    );
};

export default Matricula;