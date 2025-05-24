import inquirer from "inquirer";
import { getCategories } from "../../SQLiteStorage/Repositories/Category/getCategories";

const fetchCategories = async (): Promise<string[]> => {
  try {
    const categories: string[] = await getCategories();
    if (categories.length === 0) {
      console.log("No categories found.");
      return [];
    }
    return categories;
  } catch (error) {
    console.error("Error in fetching categories:", error);
    return [];
  }
};

const promptCategorySelection = async (categories: string[]): Promise<string | null> => {
  const { selectedCategory } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedCategory",
      message: "Choose a category to edit:",
      choices: [...categories, "Cancel"],
    },
  ]);
  return selectedCategory === "Cancel" ? null : selectedCategory;
};

const promptNewCategoryName = async (selectedCategory: string): Promise<string> => {
  const { newCategoryName } = await inquirer.prompt([
    {
      type: "input",
      name: "newCategoryName",
      message: `Enter new name for "${selectedCategory}":`,
      default: selectedCategory,
    },
  ]);
  return newCategoryName.trim();
};

export const promptEditCategories = async (): Promise<{ selectedCategory: string; newCategoryName: string } | null> => {
  const categories = await fetchCategories();
  if (categories.length === 0) return null;
  const selectedCategory = await promptCategorySelection(categories);
  if (!selectedCategory) return null;
  const newCategoryName = await promptNewCategoryName(selectedCategory);
  return { selectedCategory, newCategoryName };
};
