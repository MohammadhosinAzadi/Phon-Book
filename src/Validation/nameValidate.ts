import unauthorizedWord from '../unauthorizedWord.json';

export function validateName(name: string | undefined): string {
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