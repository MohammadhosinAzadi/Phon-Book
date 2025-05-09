import validator from 'validator';
import { db } from '../DatabaseSetup/databaseSetup'

export async function validatePhone(phone: string): Promise<string> {

    phone = phone.trim()

    if (!validator.matches(phone, /^09\d{9}$/)) {
        throw new Error('The number you entered is not valid. Numbers must start with 09.');
    }

    if (!validator.isLength(phone, { min: 11, max: 11 })) {
        throw new Error('The phone number must be exactly 11 digits long');
    }

    const isDuplicate = await new Promise<boolean>((resolve, reject) => {
        db.get('SELECT COUNT(*) AS count FROM contacts WHERE phone = ?', [phone], (err: any, row: any) => {
            if (err) {
                reject(err);
            }
            resolve(row.count > 0);
        });
    });

    if (isDuplicate) {
        throw new Error('The phone number is already registered.');
    }

    return phone;
}
