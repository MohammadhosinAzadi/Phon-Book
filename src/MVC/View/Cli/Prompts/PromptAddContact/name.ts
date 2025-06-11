import inquirer from 'inquirer';
import { validateName } from '../../../../../Validation/UI-Validation/validateName';

export const promptAddName = async (): Promise<string> => {
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
            name = await validateName(request.name); 
            break;
        } catch (error: any) {
            console.error(error.message);  
        }
    }
    return name;  
};