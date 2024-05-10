import { OptionHTMLAttributes } from "react";

export default interface iSelects {
    value: OptionHTMLAttributes<HTMLOptionElement>["value"]
    text: string | number | boolean;
}