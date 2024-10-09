import { data, save } from "./fileManager";


function validateName(name: string | undefined): string {
    if (name === undefined) {
        throw new Error('The received information is not complete!');
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        throw new Error(`There are illegal characters in the entered name. Allowed characters are English letters and blank space`);
    }
    const unauthorizedNames = ['manager', 'admin', 'user', 'test', 'operator', 'guest'];
    if (unauthorizedNames.includes(name)) {
        throw new Error('The entered name is not allowed, Do not use names such as manager, admin, guest, test, user etc');
    }
    return name;
}


function validatePhone(phoneStr: string | undefined): number {
    if (phoneStr === undefined) {
        throw new Error('The received information is not complete!');
    }
    const phone = parseInt(phoneStr);
    if (isNaN(phone)) {
        throw new Error('Number is invalid!');
    }
    if (data.some((record) => record.phone === phone)) {
        throw new Error('Number duplicated!');
    }
    if (phoneStr.length !== 10) {
        throw new Error('The phone number must be exactly 10 digits long');
    }
    if (!phoneStr.startsWith('09')) {
        throw new Error('The number you entered is not valid. Numbers must start with 09.');
    }
    return phone;
}


function validateCategory(category: string | undefined): string {
    const allowedCategories = ['colleagues', 'friends', 'family'];
    if (category === undefined || !allowedCategories.includes(category)) {
        throw new Error('Invalid category! Allowed categories are: colleagues, friends, or family.');
    }
    return category;
}


function validation(): [string, number, string] {
    const category = validateCategory(process.argv[3]);
    const name = validateName(process.argv[4]);
    const phone = validatePhone(process.argv[5]);  
    return [name, phone, category];
}


export function add(): void {
    const [name, phone, category] = validation();
    data.push({ name, phone, category }); 
    save();
    console.log(`Contact "${name}" added successfully with phone number "${phone}" in category "${category}"`);
}