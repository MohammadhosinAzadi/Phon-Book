import inquirer from "inquirer";
import { getCategories } from "../../SQLiteStorage/Repositories/Category/getCategories";
import { currentStorage, StorageType } from "../../Config/storageConfig";
import { dataCategory } from "../../JsonStorage/FileManager/initJsonData";

const fetchCategories = async (): Promise<string[] | null> => {
  try {
    let categories;
    if (currentStorage === StorageType.SQLITE) {
      categories = await getCategories(); 
    } else if (currentStorage === StorageType.JSON) {
      categories = dataCategory;
    } else {
      return null;
    }
    if (!categories || categories.length === 0) {
      console.log("No categories found.");
      return null;
    }
    return categories;
  } catch (error) {
    console.error("Error in fetching categories:", error);
    return null;
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
  if (!categories || categories.length === 0) return null;
  const selectedCategory = await promptCategorySelection(categories);
  if (!selectedCategory) return null;
  const newCategoryName = await promptNewCategoryName(selectedCategory);
  return { selectedCategory, newCategoryName };
};
