import InputFields from "../interfaces/inputs-interface/input-fields";

const inputFields: InputFields = {
    title: "Matrícula",
    nameForm: "Matricula",
    inputs: [
        {
            label: 'Email',
            type: 'email',
            name: 'email',
        },
        {
            label: "Senha",
            type: "password",
            name: "password"
        }
    ]
}

export default inputFields;