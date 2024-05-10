import { UseFormReturn, FieldValues } from "react-hook-form";
import RenderInputs from "./render-inputs";
import InputFields from "../../interfaces/inputs-interface/input-fields";

interface PrposRenderNestedForm {
    form: InputFields;
    useFormRegister: UseFormReturn<FieldValues, any, undefined>;
    defaultValues?: Record<string, unknown>
}

/**
 * Renderiza os inputs de um formulário, incluindo inputs aninhados.
 * @param form O objeto contendo os campos de input do formulário.
 */
const RenderNestedForm = ({ form, useFormRegister, defaultValues }: PrposRenderNestedForm): JSX.Element => {
    return <>
        <RenderInputs  {...{ useFormRegister, form, defaultValues }} />
        {
            form.subForm && form.subForm.map(({ nameForm, ...data }, i) => {
                // concatena os subforms
                const pickName = `${form.nameForm !== "" ? (form.nameForm + ".") : ""}${nameForm}`
                return <RenderNestedForm {...{ form: { ...data, nameForm: pickName }, useFormRegister, defaultValues }} key={i}></RenderNestedForm>
            })
        }
    </>
}


export default RenderNestedForm