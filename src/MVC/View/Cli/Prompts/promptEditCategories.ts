import inquirer from "inquirer";

export const promptEditCategories = async (
  categories: string[]
): Promise<{ selectedCategory: string; newCategoryName: string } | null> => {
  if (!categories || categories.length === 0) {
    console.log("No categories found.");
    return null;
  }

  const { selectedCategory } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedCategory",
      message: "Choose a category to edit:",
      choices: [...categories, "Cancel"],
    },
  ]);

  if (selectedCategory === "Cancel") return null;

  const { newCategoryName } = await inquirer.prompt([
    {
      type: "input",
      name: "newCategoryName",
      message: `Enter new name for "${selectedCategory}":`,
      default: selectedCategory,
    },
  ]);

  return {
    selectedCategory,
    newCategoryName: newCategoryName.trim(),
  };
};

