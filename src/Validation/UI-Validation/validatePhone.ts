import validator from 'validator';

export async function validatePhone(phone: string): Promise<string> {
    phone = phone.trim();
    if (!phone.startsWith('09')) {
        console.error("Phone number must start with 09.");  
    }
    if (!validator.isLength(phone, { min: 11, max: 11 })) {
        console.error('The phone number must be exactly 11 digits long');
    }
    if (!/^\d+$/.test(phone)) {
        console.error('Phone number must contain only digits (0-9).');
    }
	return phone;
}
