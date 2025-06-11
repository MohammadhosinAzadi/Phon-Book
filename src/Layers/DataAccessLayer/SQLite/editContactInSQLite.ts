import { db } from "../../../DBSetup/SQLite/setupSQLite";
import { Record } from "../../../Typs/record";
import { getOrCreateCategoryIdByName } from "../../../Repositories/SQLite/Category/getOrCreateCategoryIdByName";

export const editContactInSQLite = async (phone: string,updatedContact: Record): Promise<void> => {
  const categoryId = updatedContact.category?.trim()? await getOrCreateCategoryIdByName(updatedContact.category): null;
    return new Promise((resolve, reject) => {
    db.run(
      `UPDATE contacts SET name = ?, phone = ?, category_id = ? WHERE phone = ?`,
      [updatedContact.name, updatedContact.phone, categoryId, phone],
      (err: any) => {
        if (err) reject(new Error(`Failed to update contact: ${err.message}`));
        else resolve();
      }
    );
  });
};
