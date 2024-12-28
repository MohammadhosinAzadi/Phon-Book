import { data, save } from "./fileManager";
import { availableCategories, saveCategories } from "./fileManager"
import unauthorizedWord from "./unauthorizedWord.json"


function validateName(name: string | undefined): string {
    if (name === undefined) {
        throw new Error('The received information is not complete!');
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        throw new Error(`There are illegal characters in the entered name. Allowed characters are English letters and blank space`);
    }
    const unauthorizedNames = unauthorizedWord;
    if (unauthorizedNames.includes(name.toLocaleLowerCase())) {
        throw new Error('The entered name is not allowed, Do not use names such as manager, admin, guest, test, user etc');
    }
    return name;
}

function validatePhone(phone: string): number {
    const phoneNum = parseInt(phone)
    if (phoneNum === undefined) {
        throw new Error('The received information is not complete!');
    }
    if (isNaN(phoneNum)) {
        throw new Error('Number is invalid!');
    }
    if (data.some((record) => record.phone === phoneNum)) {
        throw new Error('Number duplicated!');
    }
    if (phone.length !== 10) {
        throw new Error('The phone number must be exactly 10 digits long');
    }
    if (!phone.startsWith('09')) {
        throw new Error('The number you entered is not valid. Numbers must start with 09.');
    }
    return phoneNum;
}

function validateCategory(category: string | undefined): string | undefined {
    if (!category) return undefined;
    if (!availableCategories.includes(category)) {
        availableCategories.push(category); 
        saveCategories();
    }
    return category;
}

export function add(name:string, phone:string, category?: string) : void{
    const validName = validateName(name);
    const validPhone = validatePhone(phone);
    const validCategory = validateCategory(category)
    data.push({name: validName, phone: validPhone, category: validCategory});
    save();
}

