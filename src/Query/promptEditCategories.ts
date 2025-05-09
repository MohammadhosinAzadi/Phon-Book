import inquirer from "inquirer";
import { db } from "../DatabaseSetup/databaseSetup";

export const promptEditCategories = async () => {
  try {
    const categories: string[] = await new Promise((resolve, reject) => {
      db.all("SELECT DISTINCT name FROM categories", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows.map((row: any) => row.name));
      });
    });

    if (categories.length === 0) {
      console.log("No categories found.");
      return;
    }

    const { selectedCategory } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedCategory",
        message: "Choose a category to edit:",
        choices: [...categories, "Cancel"],
      },
    ]);

    if (selectedCategory === "Cancel") return;

    const { newCategoryName } = await inquirer.prompt([
      {
        type: "input",
        name: "newCategoryName",
        message: `Enter new name for "${selectedCategory}":`,
        default: selectedCategory,
        validate: input => input.trim() !== "" ? true : "Category name cannot be empty"
      },
    ]);

    const categoryExists = await new Promise<boolean>((resolve, reject) => {
      db.get("SELECT id FROM categories WHERE name = ?", [newCategoryName], (err, row) => {
        if (err) reject(err);
        resolve(!!row);
      });
    });

    if (categoryExists) {
      console.log("This category name already exists.");
      return;
    }

    db.run(
      `UPDATE categories SET name = ? WHERE name = ?`,
      [newCategoryName, selectedCategory],
      (err: any) => {
        if (err) {
          console.error("Error updating category:", err.message);
        } else {
          console.log("Category updated successfully!");
        }
      }
    );
  } catch (error) {
    console.error("Error in editing category:", error);
  }
};
