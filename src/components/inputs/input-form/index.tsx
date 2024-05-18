import { FieldValues, UseFormReturn } from "react-hook-form";
import getValueInObject from "../../../utils/get-values-in-object";
import iInputGeneric from "../../../interfaces/inputs-interface/input-generic";
import TextInput from "../mask-input";
import { FormSelect, InputContainer, InputFormContainer, InputLabelForm, SpanError } from "./styled";
import convertType from "../../../utils/convertType";

/**
 * Propriedades esperadas pelo componente InputForm.
 */
interface PropsInputForm {
    /** Os parâmetros para configurar o campo de entrada. */
    params: iInputGeneric;
    /** O retorno do useForm do React Hook Form. */
    useFormRegister: UseFormReturn<FieldValues, any, undefined>;
    /** Valores padrão para preencher o campo. */
    defaultValues?: Record<string, unknown>;
}

/**
 * Propriedades esperadas pelos componentes Select e Input.
 */
interface PropsSelectsOrInput {
    /** O retorno do useForm do React Hook Form. */
    useFormRegister: UseFormReturn<FieldValues, any, undefined>;
    /** O nome do campo de entrada. */
    name: string;
    /** Os parâmetros para configurar o campo de entrada. */
    params: iInputGeneric;
    /** Valores padrão para preencher o campo. */
    defaultValues?: Record<string, unknown>;
}

/**
 * Componente Select para renderizar um campo select.
 * @param {PropsSelectsOrInput} props - As propriedades do componente.
 * @returns {JSX.Element} - Um elemento JSX representando o campo select.
 */
const Select = ({ name, useFormRegister: { register }, params: { selects }, defaultValues }: PropsSelectsOrInput): JSX.Element => {
    const id = `input-${name}`;
    const value = getValueInObject(name, defaultValues);

    return selects ? (
        <FormSelect defaultValue={value} {...register(name)} id={id} name={name}>
            {selects.map((option, index) => (
                <option key={index} value={option.value}>{option.text}</option>
            ))}
        </FormSelect>
    ) : <></>;
};

/**
 * Componente Input para renderizar um campo de entrada com máscara.
 * @param {PropsSelectsOrInput} props - As propriedades do componente.
 * @returns {JSX.Element} - Um elemento JSX representando o campo de entrada com máscara.
 */
const Input = ({ params, useFormRegister, name, defaultValues }: PropsSelectsOrInput): JSX.Element => {
    const { placeholder, type, selects, mask } = params;
    const id = `input-${name}`;
    const value = convertType(getValueInObject(name, defaultValues || undefined), type);
    return !selects ? (
        <TextInput
            id={id}
            placeholder={placeholder}
            type={type}
            maskType={mask}
            name={name}
            defaultValue={value}
            useFormRegister={useFormRegister}
        />
    ) : <></>;
};

/**
 * Componente de formulário de entrada que renderiza um campo de entrada com ou sem máscara.
 * @param {PropsInputForm} props - As propriedades do componente.
 * @returns {JSX.Element} - Um elemento JSX representando o campo de entrada.
 */
const InputForm = ({ params, useFormRegister, defaultValues }: PropsInputForm): JSX.Element => {
    const { name, inputWidth, maxWidth } = params;
    const { formState: { errors } } = useFormRegister;
    const error = getValueInObject(name, errors);

    return (
        <InputContainer maxWidth={maxWidth || "250px"} width={inputWidth || `${name.length * 10}px`}>
            <InputFormContainer error={!!error}>
                <InputLabelForm htmlFor={`input-${name}`}>{params.label}</InputLabelForm>
                <Select {...{ useFormRegister, name, params, defaultValues }} />
                <Input {...{ useFormRegister, name, params, defaultValues }} />
            </InputFormContainer>
            <SpanError>{(error?.message || "")}</SpanError>
        </InputContainer>
    );
};

export default InputForm;
