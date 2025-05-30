import inquirer from 'inquirer';
import { getOrCreateCategoryIdByName } from "../../../SQLiteStorage/Repositories/Category/getOrCreateCategoryIdByName"

export const promptAddCategory = async (): Promise<string | null> => {
    let category: string | null; 
    while (true) {  
        try {
            const request = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'category',
                    message: "Enter the category you want (optional. Otherwise, skip)",
                }
            ]);
            category = request.category.trim() === "" ? null : request.category.trim();

            // getOrCreateCategoryIdByName(category); 
            // category = request.category;  
            break; 
        } catch (error: any) {
            console.error(error.message);  
        }
    }
    return category;
};