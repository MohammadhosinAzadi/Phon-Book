import { dataCategory } from "../../../DBSetup/JSON/setupJSON";
import { saveToJSON } from "../../../Repositories/JSON/JsonSetup/saveToJSON";
import { categoryPath } from "../../../DBSetup/JSON/dataPath";

export async function editCategoryInJSON(
  selectedCategory: string,
  newCategoryName: string
): Promise<void> {
  try {
    const isDuplicate = dataCategory.some(
      (cat) =>
        cat.toLowerCase() === newCategoryName.toLowerCase() &&
        cat.toLowerCase() !== selectedCategory.toLowerCase()
    );
    if (isDuplicate) {
      console.log(" This category name already exists.");
      return;
    }
    const index = dataCategory.findIndex((cat) => cat === selectedCategory);
    if (index === -1) {
      console.log("Selected category not found.");
      return;
    }
    dataCategory[index] = newCategoryName;
    await saveToJSON(categoryPath, dataCategory);
    console.log("Category updated successfully.");
  } catch (error: any) {
    console.error("Error editing category:", error.message || error);
  }
}
