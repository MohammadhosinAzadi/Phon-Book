import { db } from "../../../DBSetup/SQLite/setupSQLite";
import { getOrCreateCategoryIdByName } from "../../../Repositories/SQLite/Category/getOrCreateCategoryIdByName";
import { Record } from "../../../Typs/record";

export const editContactsSQLite = async (originalPhone: string, updatedContact: Record) => {
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
