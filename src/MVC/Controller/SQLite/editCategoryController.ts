import { getCategories } from "../../../Repositories/SQLite/Category/getCategories";
import { validateCategoryExists } from "../../../Validation/Lojic-Validation/SQLite/validateCategoryExists";
import { updateCategoryName } from "../../../MVC/Model/ServicesSQLite/updateCategoryName";
import { validateName } from "../../../Validation/Lojic-Validation/SQLite/validateName";
import { promptEditCategories } from "../../../MVC/View/Cli/Prompts/promptEditCategories";

export const editCategoryController = async (): Promise<void> => {
  try {
    const categories = await getCategories();
    if (!categories || categories.length === 0) {
      console.log("No categories found.");
      return;
    }
    const data = await promptEditCategories(categories);
    if (data === null) {
      console.log("No category selected or operation was cancelled.");
      return;
    }
    const { selectedCategory, newCategoryName } = data;
    const validation = validateName(newCategoryName);
    if (!validation) {
      console.log("Invalid category name.");
      return;
    }
    if (await validateCategoryExists(newCategoryName)) {
      console.log("This category name already exists.");
      return;
    }
    await updateCategoryName(selectedCategory, newCategoryName);
    console.log("Category updated successfully!");
    
  } catch (error: any) {
    console.error("Error updating category:", error.message || error);
  }
};
