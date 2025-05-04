import { availableCategories, categoryPath } from "../../fileManager"

export function validateCategory(category: string | undefined): string | undefined {
    if (!category) return undefined;
    if (!availableCategories.includes(category)) {
        availableCategories.push(category); 
    }
    return category;
} 