/**
     * Função auxiliar para obter um valor de um objeto aninhado por meio de uma string de chave.
     * 
     * @param {string} name - O nome da chave aninhada.
     * @param {any} obj - O objeto a ser pesquisado.
     * @returns {any} O valor encontrado ou undefined se não for encontrado.
     */
const getValueInObject = (name: string, obj: any): any => {
    if (!obj) return undefined;
    const nameArray = name.split('.');
    let value: any = obj;
    for (const key of nameArray) {
        if (value === null || value === undefined)
            return undefined;
        value = value[key];
    }
    return value;
};

export default getValueInObject;