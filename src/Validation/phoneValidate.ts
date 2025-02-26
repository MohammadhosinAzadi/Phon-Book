import { data } from '../fileManager';
import validator from 'validator';

export function validatePhone(phone: string): string {

    phone = phone.trim()

    if (!validator.matches(phone, /^09\d{9}$/)) {
        throw new Error('The number you entered is not valid. Numbers must start with 09.');
    }

    if (!validator.isLength(phone, { min: 11, max: 11 })) {
        throw new Error('The phone number must be exactly 11 digits long');
    }


    if (data.some((record) => record.phone === phone)) {
        throw new Error('Number duplicated!');
    }

    return phone;
}
