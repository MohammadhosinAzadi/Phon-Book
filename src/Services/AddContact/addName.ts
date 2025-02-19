import inquirer from 'inquirer';
import { validateName } from '../../Validation/nameValidate';

export const addName = async (): Promise<string> => {
    let name: string; 

    while (true) {  
        try {
            const request = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter your desired name",
                }
            ]);

            validateName(request.name);  
            name = request.name;  

            const confirm = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'isCorrect',
                    message: `You entered: ${name}. Is this correct?`,
                }
            ]);

            if (confirm.isCorrect) {
                break;  
            } else {
                console.log("Please enter your name again.");
            }

        } catch (error: any) {
            console.error(error.message);  
        }
    }

    return name;  
};