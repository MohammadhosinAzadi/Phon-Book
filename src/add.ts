import { data, save } from "./fileManager";
import { validateName } from "./Validation/nameValidate";
import { validatePhone } from "./Validation/phoneValidate";
import { validateCategory } from "./Validation/categoryValidate";

export function add(name:string, phone:string, category?: string) : void{
    const validName = validateName(name);
    const validPhone = validatePhone(phone);
    const validCategory = validateCategory(category)
    data.push({name: validName, phone: validPhone, category: validCategory});
    save();
}

