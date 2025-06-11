import { dataCategory } from "../../../DBSetup/JSON/setupJSON";
import { promptEditCategories } from "../../../MVC/View/Cli/Prompts/promptEditCategories";
import { editCategoryJSON } from "../../../MVC/Model/ServicesJSON/editCategoryJSON";

export async function editCategoryController(): Promise<void> {
  try {
    const result = await promptEditCategories(dataCategory);
    if (!result) {
      console.log("Operation cancelled.");
      return;
    }
    const { selectedCategory, newCategoryName } = result;
    await editCategoryJSON(selectedCategory, newCategoryName);
  } catch (error: any) {
    console.error("An error occurred while editing the category:", error.message || error);
  }
}
