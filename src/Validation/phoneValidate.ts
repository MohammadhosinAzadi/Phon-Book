import { data } from '../fileManager';

export function validatePhone(phone: string): number {
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
