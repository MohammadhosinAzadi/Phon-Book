import inquirer from 'inquirer';
import { getOrCreateCategoryIdByName } from "../../../SQLiteStorage/Repositories/Category/getOrCreateCategoryIdByName"

export const promptAddCategory = async (): Promise<string | undefined> => {
    let category: string | undefined; 
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
            getOrCreateCategoryIdByName(category); 
            category = request.category;  
            break; 
        } catch (error: any) {
            console.error(error.message);  
        }
    }
    return category;
};