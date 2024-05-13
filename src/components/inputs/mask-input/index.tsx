import { FieldValues, UseFormReturn } from "react-hook-form";
import masks, { MaskTypes } from "./maskTypes";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    maskType?: MaskTypes;
    useFormRegister: UseFormReturn<FieldValues, any, undefined>
};

const TextInput = ({ maskType, useFormRegister: {register}, onChange, ...props }: TextInputProps) => {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (maskType) {
            const mask = masks[maskType];
            event.currentTarget.value = mask(event);
        }

        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    return <input {...props} {...register(props.name || "")} type="text" onChange={handleChange} />;
}

export default TextInput;