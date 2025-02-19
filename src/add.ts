import { data, dataPath } from "./fileManager";
import  save  from "./FileHandlers/save";
import * as validate from './Validation'

export function add(name:string, phone:string, category?: string) : void{
    const validName = validate.validateName(name);
    const validPhone = validate.validatePhone(phone);
    const validCategory = validate.validateCategory(category)
    data.push({name: validName, phone: validPhone, category: validCategory});
    save(dataPath, data);
}

