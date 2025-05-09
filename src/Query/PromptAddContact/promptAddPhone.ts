import inquirer from 'inquirer';
import { validatePhone } from '../../Validation/validatePhone';

export const promptAddPhone = async (): Promise<string> => {
    let phone: string; 

    while (true) {  
        try {
            const request = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'phone',
                    message: "Enter your desired phone (11 digits - start with '09'):",
                }
            ]);

            validatePhone(request.phone);  
            phone = request.phone;  
            break;

        } catch (error: any) {
            console.error(error.message);  
        }
    }

    return phone; 

};


