import validator from 'validator';
import { getCountPhone } from '../SQLiteStorage/Repositories/Contact/getCountPhone';
import { currentStorage, StorageType } from "../Config/storageConfig";
import { data } from '../JsonStorage/FileManager/initJsonData';

export async function validatePhone(phone: string): Promise<string> {
	if (phone === undefined) {
		console.error("The received information is not complete!");
	}
    if (!phone.startsWith('09')) {
        console.error("Phone number must start with 09.");  
    }
    if (!validator.isLength(phone, { min: 11, max: 11 })) {
        console.error('The phone number must be exactly 11 digits long');
    }
    let isDuplicate = false
    if (currentStorage === StorageType.SQLITE) {
        isDuplicate = await getCountPhone(phone)
    } else if (currentStorage === StorageType.JSON) {
        isDuplicate = data.some(contact => contact.phone === phone);
    }
    if (isDuplicate) {
        console.error('The phone number is already registered.');
    }
	return phone;
}
