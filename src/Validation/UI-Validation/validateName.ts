import unauthorizedWord from '../../unauthorizedWord.json';
import validator from 'validator';

export function validateName(name: string): string {
    if (name === undefined) {
        console.error('The received information is not complete!');
    }
    name = name.trim();
    if (!validator.isAlpha(name, 'en-US', { ignore: ' ' })) {
        console.error("There are illegal characters in the entered name.");
    }
    if (unauthorizedWord.includes(name.toLocaleLowerCase())) {
        console.error('The entered name is not allowed, Do not use names such as manager, admin, guest, test, user etc');
    }
    if (name.length < 2 || name.length > 50) {
        console.error('Name must be between 2 and 50 characters.');
    }
    if (/(\w)\1{2,}/.test(name)) {
        console.error('Avoid using repetitive characters in the name.');
    }
    return name;
}