import inquirer from "inquirer";
import { dataPath, categoryPath } from "../fileManager";
import * as fileHandler from "../FileHandlers";

export async function editCategories() {
    try {
        const data = fileHandler.loadData(dataPath, []);
        let categories = fileHandler.loadData(categoryPath, []);

        const { selectedCategory } = await inquirer.prompt([
            {
                type: "list",
                name: "selectedCategory",
                message: "Select a category to edit or delete:",
                choices: [...categories, "Cancel"],
            },
        ]);
        
        if (selectedCategory === "Cancel") return;

        const filteredContacts = data.filter(contact => contact.category === selectedCategory);

        if (filteredContacts.length === 0) {
            console.log(`No contacts found in the category "${selectedCategory}".`);
            return;
        }

        console.log("Contacts in category", selectedCategory, ":", filteredContacts);

        const { action } = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: "Do you want to rename or delete this category?",
                choices: ["Rename", "Delete", "Cancel"],
            },
        ]);

        if (action === "Cancel") return;

        if (action === "Rename") {
            const { newCategory } = await inquirer.prompt([
                {
                    type: "input",
                    name: "newCategory",
                    message: "Enter the corrected category name:",
                    validate: input => input.trim() !== "" ? true : "Category name cannot be empty",
                },
            ]);

            filteredContacts.forEach(contact => {
                contact.category = newCategory;
            });

            categories = categories.map(cat => cat === selectedCategory ? newCategory : cat);
            
            console.log(`Category "${selectedCategory}" updated to "${newCategory}" for all matching contacts.`);
        } else if (action === "Delete") {
            filteredContacts.forEach(contact => {
                contact.category = "";
            });
            
            categories = categories.filter(category => category !== selectedCategory);
            console.log(`Category "${selectedCategory}" has been removed from all contacts.`);
        }

        fileHandler.save(dataPath, data);
        fileHandler.save(categoryPath, categories);
        
    } catch (error) {
        console.error("Error updating category:", error);
    }
}


