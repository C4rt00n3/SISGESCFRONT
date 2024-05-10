import { FieldValues, UseFormReturn } from "react-hook-form";
import "./styled.css";
import getValueInObject from "../../utils/get-values-in-object";
import iInputGeneric from "../../interfaces/inputs-interface/input-generic";
import TextInput from "../mask-input";

/**
 * Propriedades esperadas pelo componente InputForm.
 */
interface PropsInputForm {
    /** Os parâmetros para configurar o campo de entrada. */
    params: iInputGeneric;
    /** O retorno do useForm do React Hook Form. */
    useFormRegister: UseFormReturn<FieldValues, any, undefined>;
    /** Valores padrão para preencher o campo. */
    defaultValues?: Record<string, unknown>
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
    defaultValues?: Record<string, unknown>
}

/**
 * Componente Select para renderizar um campo select.
 * @param props As propriedades do componente.
 * @returns Um elemento JSX representando o campo select.
 */
const Select = ({ name, useFormRegister: { register }, params: { selects }, defaultValues }: PropsSelectsOrInput): JSX.Element => {
    const id = `input-${name}`;
    const value = getValueInObject(name, defaultValues);

    return selects ? (
        <select defaultValue={value} {...register(name)} id={id} name={name}>
            {selects.map((option, index) => (
                <option key={index} value={option.value}>{option.text}</option>
            ))}
        </select>
    ) : <></>;
};

/**
 * Converte um valor para um tipo específico.
 * @param value O valor a ser convertido.
 * @param type O tipo para o qual o valor deve ser convertido.
 * @returns O valor convertido para o tipo especificado.
 */
const convertType = (value: any, type: string | undefined) => {
    if (value)
        switch (type) {
            case "number":
                return Number(value);
            case "boolean":
                return Boolean(value);
            case "date":
                return new Date(value).toISOString().substring(0, 10);
            default:
                return value;
        }
    else
        return undefined
};

/**
 * Componente Input para renderizar um campo de entrada com máscara.
 * @param {PropsSelectsOrInput} props - As propriedades do componente.
 * @returns {JSX.Element} - Um elemento JSX representando o campo de entrada com máscara.
 */
const Input = ({ params, useFormRegister, name, defaultValues }: PropsSelectsOrInput): JSX.Element => {
    const { placeholder, type, selects, mask } = params;
    const id = `input-${name}`;
    const value = convertType(getValueInObject(name, defaultValues), type);

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
 * @param props As propriedades do componente.
 * @returns Um elemento JSX representando o campo de entrada.
 */
const InputForm = ({ params, useFormRegister, defaultValues }: PropsInputForm): JSX.Element => {
    const { name } = params;
    const { formState: { errors } } = useFormRegister;
    const error = getValueInObject(name, errors);

    return (
        <div>
            <div className="input-form-container" style={{ width: params.inputWidth }}>
                <label htmlFor={`input-${name}`}>{params.label}</label>
                <Select {...{ useFormRegister, name, params, defaultValues }} />
                <Input {...{ useFormRegister, name, params, defaultValues }} />
            </div>
            {error && <span style={{ color: "red", fontSize: "10px" }} className="error-message">{error.message + ""}</span>}
        </div>
    );
};

export default InputForm;
