import inquirer from 'inquirer';
import { validateCategory } from '../../../Validation/validateCategory';

export const promptAddCategory = async (): Promise<string> => {
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

            category = request.category.trim() === "" ? null : request.category;

            if (category !== null) {
                validateCategory(category);
            }

            validateCategory(request.category);  
            category = request.category;  
            break; 

        } catch (error: any) {
            console.error(error.message);  
        }
    }

    return category;

    
};