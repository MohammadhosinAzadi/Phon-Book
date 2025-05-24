import { db } from "../../DatabaseSetup/databaseSetup";
import { getOrCreateCategoryIdByName } from "../Category/getOrCreateCategoryIdByName";

export type UpdatedContact = {
  name: string;
  phone: string;
  category: string;
};

export const editContacts = async (originalPhone: string, updatedContact: UpdatedContact) => {
  let categoryId: number | null = null;
  if (updatedContact.category.trim() !== "") {
    categoryId = await getOrCreateCategoryIdByName(updatedContact.category);
  }
  return new Promise<void>((resolve, reject) => {
    db.run(
      `UPDATE contacts
       SET name = ?, phone = ?, category_id = ?
       WHERE phone = ?`,
      [updatedContact.name, updatedContact.phone, categoryId, originalPhone],
      (err) => {
        if (err) {
          reject(new Error(`Failed to update contact: ${err.message}`));
        } else {
          resolve();
        }
      }
    );
  });
};
