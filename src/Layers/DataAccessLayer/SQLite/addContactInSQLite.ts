import { db } from "../../../DBSetup/SQLite/setupSQLite";
import { Record } from "../../../Typs/record";
import { getOrCreateCategoryIdByName } from "../../../Repositories/SQLite/Category/getOrCreateCategoryIdByName";

export async function addContactInSQLite(contact: Record): Promise<void> {
  try {
    const categoryId = contact.category? await getOrCreateCategoryIdByName(contact.category): null;
    const sql = `INSERT INTO contacts (name, phone, category_id) VALUES (?, ?, ?)`;
    return new Promise((resolve, reject) => {
      db.run(sql, [contact.name, contact.phone, categoryId], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    throw error;
  }
}


