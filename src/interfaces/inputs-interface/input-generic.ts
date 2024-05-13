import { InputHTMLAttributes } from "react"
import iSelects from "./selects-interface";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { MaskTypes } from "../../components/inputs/mask-input/maskTypes";


export default interface iInputGeneric {
    id?: string;
    inputWidth?: string,
    mask?: MaskTypes;
    placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"],
    label: string,
    type?: InputHTMLAttributes<HTMLInputElement>["type"],
    name: string;
    selects?: iSelects[],
    value?: any,
    error?: boolean,
    register?: UseFormRegister<FieldValues>,
    errors?: FieldErrors<FieldValues>
}