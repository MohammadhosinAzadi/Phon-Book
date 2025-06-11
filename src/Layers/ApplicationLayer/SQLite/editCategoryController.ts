import { getCategories } from "../../../Repositories/SQLite/Category/getCategories";
import { promptEditCategories } from "../../../Layers/PresentationLayer/Cli/Prompts/promptEditCategories";
import { editCategory } from "../../../Layers/BusinessLogicLayer/SQLite/editCategory";

export const editCategoryController = async (): Promise<void> => {
  try {
    const categories = await getCategories();
    if (categories === null) {
        console.log("No categories found.");
        return;
    }
    const result = await promptEditCategories(categories);
    if (result === null) {
      console.log("No category selected or operation cancelled.");
      return;
    }
    const { selectedCategory, newCategoryName } = result;
    const updateResult = await editCategory(selectedCategory, newCategoryName);
    if (updateResult === true) {
      console.log("Category updated successfully!");
    } else {
      console.log("Error:", updateResult);
    }
  } catch (err: any) {
    console.error("Unexpected error:", err.message || err);
  }
};
