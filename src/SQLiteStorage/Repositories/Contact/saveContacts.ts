import { db } from '../../../SQLiteStorage/DatabaseSetup/databaseSetup';  
import { getOrCreateCategoryIdByName } from '../../../SQLiteStorage/Repositories/Category/getOrCreateCategoryIdByName'; 
import { Record } from '../../../Typs/record';

export async function saveContacts(contact: Record): Promise<void> {
  try {
    const categoryId = contact.category ? await getOrCreateCategoryIdByName(contact.category) : null;
    const sql = `INSERT INTO contacts (name, phone, category_id) VALUES (?, ?, ?)`;
    return new Promise((resolve, reject) => {
      db.run(sql, [contact.name, contact.phone, categoryId], (err: any) => {
        if (err) {
          console.error('Error saving to database:', err.message);
          reject(err);
        } else {
          console.log('Contact added successfully!');
          resolve();
        }
      });
    });
  } catch (error: any) {
    console.error('Error saving contact:', error.message);
    throw error;
  }
}
