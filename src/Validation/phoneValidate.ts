import { data } from '../fileManager';
import validator from 'validator';

export function validatePhone(phone: string): number {

    const phoneNum = parseInt(phone, 10);

    if (isNaN(phoneNum)) {
        throw new Error('Number is invalid!');
    }

    if (!validator.isNumeric(phone)) {
        throw new Error('The phone number must only contain numbers!');
    }

    if (!validator.isLength(phone, { min: 10, max: 10 })) {
        throw new Error('The phone number must be exactly 10 digits long');
    }

    if (!validator.matches(phone, /^09\d{8}$/)) {
        throw new Error('The number you entered is not valid. Numbers must start with 09.');
    }

    if (data.some((record) => record.phone === phoneNum)) {
        throw new Error('Number duplicated!');
    }

    phone = phone.trim();

    return phoneNum;
}
