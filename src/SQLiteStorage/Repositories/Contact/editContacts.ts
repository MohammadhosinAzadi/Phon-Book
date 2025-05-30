import { db } from "../../../SQLiteStorage/DatabaseSetup/databaseSetup";
import { getOrCreateCategoryIdByName } from "../../../SQLiteStorage/Repositories/Category/getOrCreateCategoryIdByName";
import { Record } from "../../../Typs/record";

export const editContacts = async (originalPhone: string, updatedContact: Record) => {
  let categoryId: number | null = null;
  if (updatedContact.category && updatedContact.category.trim() !== "") {
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
