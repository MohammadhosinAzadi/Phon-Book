import  save  from "./FileHandlers/save";
import { dataPath , data } from "./fileManager"

function extractionPhone(phone: string): number {

    const phoneNum = parseInt(phone)
    if (phoneNum === undefined) {
        throw new Error('The received information is not complete!');
    }

    const index = data.findIndex(record => record.phone === phone); 
    if (index === -1) {
        throw new Error("Number is not found!");
    }
    return index;
}

export function remove(phone: string): void {
    const index = extractionPhone(phone);
    data.splice(index, 1); 
    save(dataPath,data); 
    console.log(`Contact with phone number ${phone} removed successfully.`);
}


