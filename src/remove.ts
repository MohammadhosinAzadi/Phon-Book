import  save  from "./JsonStorage/FileHandlers/save";
import { dataPath , data } from "./fileManager"
import { removeContact } from "./DatabaseStorage/RemoveContacts"

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

    removeContact(phone); 

    console.log(`Contact with phone number ${phone} removed successfully.`);
}


