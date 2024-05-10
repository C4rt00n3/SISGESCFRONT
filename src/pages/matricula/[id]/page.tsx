import { useState, useEffect } from "react";
import Input from "../../../components/Input-header";
import FormMatricula from "../../../components/from-matricula";
import NavBar from "../../../components/nav-bar";
import { useHomeContext } from "../../../contexts/home-provider-context";
import { useMatriculaContext } from "../../../contexts/matricula-provider-context";
import iMatricula from "../../../interfaces/netwok-interface/matricula-interface";
import NetWork from "../../../utils/network";
import callToast from "../../../utils/tosts";
import { useParams } from "react-router-dom";

const EnrollmentRouteWithId = () => {
    const { id } = useParams();
    console.log(id);
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

    return (
        <div className="main-container">
            <NavBar />
            <main>
                <Input />
                <div className="form-container">
                    {
                        matricula && <FormMatricula
                            id={id ? +id : undefined}
                            method="patch"
                            defaultValues={{
                                ...matricula,
                                Aluno: {
                                    ...matricula.Aluno,
                                    ...(matricula.Aluno?.filiacao[0] && { filiacao1: matricula.Aluno.filiacao[0] }),
                                    ...(matricula.Aluno?.filiacao[1] && { filiacao2: matricula.Aluno.filiacao[1] }),
                                }
                            }}
                            fields={fields} />
                    }
                </div>
            </main>
        </div>
    );
};

export default EnrollmentRouteWithId;
