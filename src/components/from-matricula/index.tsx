import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputFields from "../../interfaces/inputs-interface/input-fields";
import schemaMatricula from "../../schemas/matricula-schema";
import NetWork from "../../utils/network";
import removeEmptyKeys from "../../utils/remove-empty-keys";
import callToast from "../../utils/tosts";
import RenderNestedForm from "./Render-nested-form";
import { BoxButtonDiv, ButtonForm, EnrollmentForm, BoxFormMatricula } from "./styled";

interface PropsFormInpu {
    fields: InputFields[];
    defaultValues?: any;
    method: "post" | "patch";
    id?: number
}

/**
 * Componente de formulário de matrícula de aluno.
 * @param fields Um array de objetos contendo os campos de input para o formulário.
 * @param defautValue uma valor para iniciar o form.
 */
const FormMatricula = ({ fields, defaultValues, method = "post", id }: PropsFormInpu) => {
    const useFormRegister = useForm({
        resolver: zodResolver(schemaMatricula),
    });

    const { register, handleSubmit } = useFormRegister;

    const onSubmit = async (data: any) => {
        try {
            const api = new NetWork("matricula", 5000, {})
            const { Aluno } = defaultValues;
            const { filiacao1, filiacao2 } = Aluno;

            if (method == "post") {
                await api.post(data, {})
                callToast("success")
            }
            if (method === "patch" && id) {
                if (data.Aluno.filiacao[0])
                    data.Aluno.filiacao[0].id = filiacao1.id;
                if (data.Aluno.filiacao[1])
                    data.Aluno.filiacao[1].id = filiacao2.id;

                await api.patch({
                    params: { id },
                    data: removeEmptyKeys(data)
                })
                callToast("success", "Editado com sucesso");
            }
        } catch (error: any) {
            callToast("error", error?.response?.data?.message)
        }
    };

    return (
        <EnrollmentForm>
            <BoxFormMatricula onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((form, index) => {
                        return <RenderNestedForm key={index} {...{ form, register, useFormRegister, defaultValues }} />
                        
                    })}
                    <BoxButtonDiv>
                        <ButtonForm
                            style={{ backgroundColor: method == "post" ? "var(--brand-color)" : "var(--warning-color)" }}
                            type="submit">
                            {method == "post" ? "Enviar" : "Editar"}
                        </ButtonForm>
                    </BoxButtonDiv>
            </BoxFormMatricula >
        </EnrollmentForm >
    );
};

export default FormMatricula;