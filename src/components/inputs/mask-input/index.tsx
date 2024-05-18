import { FieldValues, UseFormReturn } from "react-hook-form";
import masks, { MaskTypes } from "./maskTypes";
import { useEffect } from "react";

/**
 * Props for the TextInput component
 */
type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /**
     * Optional mask type to format the input value
     */
    maskType?: MaskTypes;

    /**
     * React Hook Form's useFormRegister function to register the input
     */
    useFormRegister: UseFormReturn<FieldValues, any, undefined>;
};

/**
 * TextInput component that supports optional masking and integrates with React Hook Form
 * @param {TextInputProps} props - The props for the TextInput component
 * @returns {JSX.Element} The rendered input element
 */
const TextInput = ({ maskType, defaultValue, useFormRegister: { register, setValue }, ...props }: TextInputProps): JSX.Element => {
    const name = props.name || "";

    useEffect(() => {
        if (defaultValue) {
            let initialValue = defaultValue;
            if (maskType) {
                const mask = masks[maskType];
                initialValue = mask({ currentTarget: { value: defaultValue } } as React.ChangeEvent<HTMLInputElement>);
            }
            setValue(name, initialValue);
        }
    }, [defaultValue, name, setValue, maskType]);

    /**
    * Handles the change event for the input element
    * @param {React.ChangeEvent<HTMLInputElement>} event - The change event
    */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (maskType) {
            const mask = masks[maskType];
            event.currentTarget.value = mask(event);
        }
        register(name).onChange(event);
    };

    return <input {...register(name)} onBlur={register(name).onBlur} onChange={handleChange} {...props} />;
};

export default TextInput;
