import { promptEditCategories } from "Cli/Prompts/promptEditCategories";
import { dataCategory } from "JsonStorage/FileManager/initJsonData";

export async function editCategoryJSON(): Promise<void> {
    try {
        const result = await promptEditCategories();
        if (result === null) {
            console.log("Operation cancelled or no categories available.");
            return
        }
        const exists = dataCategory.some(cat => cat.toLowerCase() === result.newCategoryName.toLowerCase());
        if (exists && result.newCategoryName.toLowerCase() !== result.selectedCategory.toLowerCase()) {
            console.log("This category name already exists.");
        }
        const contactIndex = dataCategory.findIndex((category) => category === result.selectedCategory);
        if (contactIndex === -1) {
            console.log("Selected category not found.");
            return
        } 
        dataCategory[contactIndex] = result.selectedCategory;
        console.log("Category updated successfully.");
    } catch (error : any) {
        console.error("Error editing category:", error.message || error);
    }
}