/**
* Converte um valor para um tipo específico.
* @param {any} value - O valor a ser convertido.
* @param {string | undefined} type - O tipo para o qual o valor deve ser convertido.
* @returns {any} - O valor convertido para o tipo especificado.
*/
export default function convertType(value: any, type: string | undefined): any {
    if (value) {
        switch (type) {
            case "number":
                return +value;
            case "boolean":
                return Boolean(value);
            case "date":
                return new Date(value).toISOString().substring(0, 10);
            default:
                return value;
        }
    } else {
        return undefined;
    }
};