import InputFields from "@/interfaces/inputs-interface/input-fields";

const constructorObj = (fields: InputFields[], obj: { [key: string]: { [key: string]: any } }) => {
    fields.forEach(value => {
        obj[value.nameForm] = {}; 
        value.inputs.forEach(e => {
            obj[value.nameForm][e.name] = null;
        });
        if (value.subForm)
            constructorObj(value.subForm, obj)
    });

    return obj
}

export default constructorObj;