import { data, save } from "./fileManager";

function validation(phone: string): number {
    const phoneNum = parseInt(phone, 10); 
    if (isNaN(phoneNum)) {
        throw new Error("Invalid phone number format");
    }

    const index = data.findIndex(record => record.phone === phoneNum); 
    if (index === -1) {
        throw new Error("Number is not found!");
    }
    return index;
}

export function remove(phone: string): void {
    const index = validation(phone);
    data.splice(index, 1); 
    save(); 
    console.log(`Contact with phone number ${phone} removed successfully.`);
}


