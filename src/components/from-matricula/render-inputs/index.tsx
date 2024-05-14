import { Dispatch, SetStateAction, useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import InputFields from "../../../interfaces/inputs-interface/input-fields";
import getValueInObject from "../../../utils/get-values-in-object";
import InputForm from "../../inputs/input-form";

interface RenderInputsProps {
    form: InputFields;
    useFormRegister: UseFormReturn<FieldValues, any, undefined>;
    defaultValues?: Record<string, unknown>,

}

interface CheckBoxProps extends RenderInputsProps {
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>
}

const CheckBoxAndTitle = ({
    form: { title, inputCheckbox, nameForm },
    useFormRegister: { register },
    isChecked,
    setIsChecked,
}: CheckBoxProps) => {
    return <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {inputCheckbox && (
                <>
                    <p>{inputCheckbox.text}</p>
                    <input
                        {...register(nameForm)}
                        type="checkbox"
                        checked={!isChecked}
                        onChange={() => setIsChecked((prev) => !prev)}
                    />
                </>
            )}
        </div>
    </div>
}

const InputFieldsUse = ({
    form: { inputCheckbox, inputs, nameForm },
    useFormRegister,
    isChecked,
    defaultValues
}: CheckBoxProps) => {
    return <>
        {(isChecked || !inputCheckbox) && (
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: "20px" }}>
                {inputs.map(({ name, ...input }, index) => {
                    const nameP = `${nameForm !== "" ? (nameForm + '.') : ""}${name}`

                    return (
                        <InputForm
                            defaultValues={defaultValues}
                            useFormRegister={useFormRegister}
                            key={index}
                            params={{ ...input, name: nameP }}
                        />
                    );
                })}
            </div>
        )}
    </>
}

const RenderInputs = ({ form, useFormRegister, defaultValues }: RenderInputsProps) => {
    const open = getValueInObject(form.nameForm, defaultValues) ? true : false;
    const [isChecked, setIsChecked] = useState<boolean>(open);
    return (
        <div style={{ width: "100%" }}>
            <CheckBoxAndTitle {...{ form, useFormRegister, defaultValues, isChecked, setIsChecked }} />
            <InputFieldsUse {...{ form, useFormRegister, defaultValues, isChecked, setIsChecked }} />
        </div>
    );
};

export default RenderInputs;
