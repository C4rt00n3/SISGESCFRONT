import { RefObject } from "react";
import iInputGeneric from "./input-generic";

export interface iCheckBoxForm {
    // aberto ou fechado
    open: boolean;
    // texto da pegunta do check box
    text: string;
    // nome do check box
    name?: string
}

interface Click {
    text: string,
    color: string
    background: string,
    itemsToReveal?: iInputGeneric[]
}

interface InputFields {
    inputWidth?: number;
    nameForm: string;
    anc?: RefObject<HTMLFormElement>;
    // Indica se terá uma check box que precisa ser marcada para que o formulario apareça
    inputCheckbox?: iCheckBoxForm;
    // indica se dee ter um button para criação
    click?:Click;
    // titulo do formulario
    title: string;
    // list de inputs
    inputs: iInputGeneric[];
    // um sub formulari dentro do formulario
    subForm?: InputFields[];
}

export default InputFields;
