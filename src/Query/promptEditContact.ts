import inquirer from "inquirer";
import { db } from "../DatabaseSetup/databaseSetup";
import { getOrCreateCategoryIdByName } from "../DatabaseOperations/getOrCreateCategoryIdByName";

export const promptEditContact = async (phone: string) => {
  try {
    const contact = await new Promise<any>((resolve, reject) => {
      db.get(
        `SELECT contacts.*, categories.name AS category 
         FROM contacts
         LEFT JOIN categories ON contacts.category_id = categories.id
         WHERE contacts.phone = ?`,
        [phone],
        (err, row) => {
          if (err) return reject(err);
          resolve(row);
        }
      );
    });

    if (!contact) {
      console.log("Contact not found!");
      return;
    }

    const updatedContact = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: `Enter new name (current: ${contact.name}):`,
        default: contact.name,
      },
      {
        type: "input",
        name: "phone",
        message: `Enter new phone number (current: ${contact.phone}):`,
        default: contact.phone.toString(),
      },
      {
        type: "input",
        name: "category",
        message: `Enter new category (current: ${contact.category || "None"}):`,
        default: contact.category || "",
      },
    ]);

    let categoryId: number | null = null;
    if (updatedContact.category.trim() !== "") {
      categoryId = await getOrCreateCategoryIdByName(updatedContact.category);
    }

    db.run(
      `UPDATE contacts
       SET name = ?, phone = ?, category_id = ?
       WHERE phone = ?`,
      [updatedContact.name, updatedContact.phone, categoryId, phone],
      (err : any) => {
        if (err) {
          console.error("Error updating contact:", err.message);
        } else {
          console.log("Contact updated successfully!");
        }
      }
    );
  } catch (error) {
    console.error("Error in editing contact:", error);
  }
};

