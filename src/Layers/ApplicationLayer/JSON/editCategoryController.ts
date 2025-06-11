import { dataCategory } from "../../../DBSetup/JSON/setupJSON";
import { promptEditCategories } from "../../../Layers/PresentationLayer/Cli/Prompts/promptEditCategories";
import { editCategory } from "../../../Layers/BusinessLogicLayer/JSON/editCategory";

export async function editCategoryController(): Promise<void> {
  try {
    const result = await promptEditCategories(dataCategory);
    if (!result) {
      console.log("Operation cancelled.");
      return;
    }
    const { selectedCategory, newCategoryName } = result;
    await editCategory(selectedCategory, newCategoryName);
  } catch (error: any) {
    console.error("An error occurred while editing the category:", error.message || error);
  }
}
