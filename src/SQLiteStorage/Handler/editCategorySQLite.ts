import { categoryExists } from "../../SQLiteStorage/Repositories/Category/categoryExists";
import { updateCategoryName } from "../../SQLiteStorage/Repositories/Category/updateCategoryName";
import { validateCategoryName } from "../../Validation/categoryValidation";
import { promptEditCategories } from "../../Cli/Prompts/promptEditCategories";

export const editCategorySQLite = async (): Promise<void> => {
  try {
    const data = await promptEditCategories();
    if (data === null) {
      console.log("No category selected or operation was cancelled.");
      return
    }
    const validation = validateCategoryName(data.newCategoryName);
    if (validation !== true) {
      console.log(validation); 
      return;
    }
    if (await categoryExists(data.newCategoryName)) {
      console.log("This category name already exists.");
    }
    await updateCategoryName(data.selectedCategory, data.newCategoryName);
    console.log("Category updated successfully!");
  } catch (error: any) {
    console.error("Error updating category:", error.message);
  }
};
