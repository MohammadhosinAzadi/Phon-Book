import { categoryExists } from "../Repositories/Category/categoryExists";
import { updateCategoryName } from "../Repositories/Category/updateCategoryName";
import { validateCategoryName } from "../Validation/categoryValidation";
import { promptEditCategories } from "../Cli/Prompts/promptEditCategories";

const handleError = (error: any, customMessage: string): string => {
  console.error(customMessage, error.message);
  return `${customMessage}: ${error.message}`;
};

const isValidCategory = async (categoryName: string): Promise<string | null> => {
  const validation = validateCategoryName(categoryName);
  if (validation !== true) return validation as string;

  const exists = await categoryExists(categoryName);
  if (exists) return "This category name already exists.";

  return null;
};

export const editCategoryController = async (): Promise<string> => {
  try {
    const data = await promptEditCategories();
    if (!data) return "No category selected or operation was cancelled.";

    const { selectedCategory, newCategoryName } = data;

    const validationMessage = await isValidCategory(newCategoryName);
    if (validationMessage) return validationMessage;

    await updateCategoryName(selectedCategory, newCategoryName);
    return "Category updated successfully!";
    
  } catch (error: any) {
    return handleError(error, "Error updating category");
  }
};
