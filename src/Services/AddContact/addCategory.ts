import inquirer from 'inquirer';
import { validateCategory } from '../../Validation/categoryValidate';

export const addCategory = async (): Promise<string> => {
    let category: string; 

    while (true) {  
        try {
            const request = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'category',
                    message: "Enter the category you want (optional. Otherwise, skip)",
                }
            ]);

            validateCategory(request.category);  
            category = request.category;  

            const confirm = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'isCorrect',
                    message: `You entered: ${category}. Is this correct?`,
                }
            ]);

            if (confirm.isCorrect) {
                break;  
            } else {
                console.log("Please enter your category again.");
            }

        } catch (error: any) {
            console.error(error.message);  
        }
    }

    return category;  
};