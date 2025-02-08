import { availableCategories, categoryPath } from "../fileManager"
import  save  from "../FileHandlers/save";

export function validateCategory(category: string | undefined): string | undefined {
    if (!category) return undefined;
    if (!availableCategories.includes(category)) {
        availableCategories.push(category); 
        save(categoryPath, availableCategories)
    }
    return category;
}