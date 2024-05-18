import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputFields from "../../interfaces/inputs-interface/input-fields";
import schemaMatricula from "../../schemas/matricula-schema";
import NetWork from "../../utils/network";
import removeEmptyKeys from "../../utils/remove-empty-keys";
import callToast from "../../utils/tosts";
import RenderNestedForm from "./Render-nested-form";
import { BoxButtonDiv, ButtonForm, EnrollmentForm, BoxFormMatricula } from "./styled";

interface PropsFormInput {
    fields: InputFields[];
    defaultValues?: any;
    method: "post" | "patch";
    id?: number;
}

/**
 * Componente de formulário de matrícula de aluno.
 * @param {PropsFormInput} props - As propriedades do componente de formulário de matrícula.
 * @returns {JSX.Element} O componente de formulário de matrícula renderizado.
 */
const FormMatricula = ({ fields, defaultValues, method = "post", id }: PropsFormInput): JSX.Element => {
    const useFormRegister = useForm({
        resolver: zodResolver(schemaMatricula),
        defaultValues
    });

    const { handleSubmit } = useFormRegister;

    const onSubmit = async (data: any) => {
        try {
            const api = new NetWork("matricula", 5000, {});
            const { Aluno } = defaultValues;
            const { filiacao1, filiacao2 } = Aluno;

            console.log(method, id)
            if (method === "post") {
                await api.post(data, {});
                callToast("success");
            } else if (method === "patch" && id) {
                console.log("PATCH")
                if (data.Aluno.filiacao[0])
                    data.Aluno.filiacao[0].id = filiacao1.id;
                if (data.Aluno.filiacao[1])
                    data.Aluno.filiacao[1].id = filiacao2.id;

                const notEmptyKey = removeEmptyKeys(data);
                console.log(notEmptyKey, "Aqui")

                await api.patch({
                    params: { id },
                    data: notEmptyKey
                });
                callToast("success", "Editado com sucesso");
            }
        } catch (error: any) {
            callToast("error", error?.response?.data?.message);
        }
    };

    return (
        <EnrollmentForm>
            <BoxFormMatricula onSubmit={handleSubmit(onSubmit)}>
                {fields.map((form, index) => (
                    <RenderNestedForm
                        key={index}
                        form={form}
                        useFormRegister={useFormRegister}
                        defaultValues={defaultValues}
                    />
                ))}
                <BoxButtonDiv>
                    <ButtonForm
                        style={{ backgroundColor: method === "post" ? "var(--brand-color)" : "var(--warning-color)" }}
                        type="submit"
                    >
                        {method === "post" ? "Enviar" : "Editar"}
                    </ButtonForm>
                </BoxButtonDiv>
            </BoxFormMatricula>
        </EnrollmentForm>
    );
};

export default FormMatricula;
