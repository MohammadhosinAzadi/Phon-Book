import { db } from '../../../DBSetup/SQLite/setupSQLite';  
import { getOrCreateCategoryIdByName } from '../../../Repositories/SQLite/Category/getOrCreateCategoryIdByName'; 
import { Record } from '../../../Typs/record';
import { validatePhone } from '../../../Validation/Lojic-Validation/SQLite/validatePhone'
import { validateName } from '../../../Validation/Lojic-Validation/SQLite/validateName'

export async function addContactsSQLite(contact: Record): Promise<void> {
  try {
    await validatePhone(contact.phone);
    await validateName(contact.name)
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
