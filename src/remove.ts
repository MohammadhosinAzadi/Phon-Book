import { data, save } from "./fileManager";
import { validatePhone } from './Validation/phoneValidate'

export function remove(phone: string): void {
    const index = validatePhone(phone);
    data.splice(index, 1); 
    save(); 
    console.log(`Contact with phone number ${phone} removed successfully.`);
}


