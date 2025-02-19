import inquirer from 'inquirer';
import { validatePhone } from '../../Validation/phoneValidate';

export const addPhone = async (): Promise<string> => {
    let phone: string; 

    while (true) {  
        try {
            const request = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'phone',
                    message: "Enter your desired phone (10 digits - start with '09'):",
                }
            ]);

            validatePhone(request.phone);  
            phone = request.phone;  

            const confirm = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'isCorrect',
                    message: `You entered: ${phone}. Is this correct?`,
                }
            ]);

            if (confirm.isCorrect) {
                break;  
            } else {
                console.log("Please enter your phone number again.");
            }

        } catch (error: any) {
            console.error(error.message);  
        }
    }

    return phone; 
    // console.log("Validating phone:", phone);

};


