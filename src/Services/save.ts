import { db } from '../DatabaseSetup/databaseSetup';  
import { getOrCreateCategoryIdByName } from '../DatabaseOperations/getOrCreateCategoryIdByName'; 

export async function saveContact(name: string, phone: string, category: string): Promise<void> {
  try {
    const categoryId = await getOrCreateCategoryIdByName(category); 
    const sql = `INSERT INTO contacts (name, phone, category_id) VALUES (?, ?, ?)`;
    
    db.run(sql, [name.trim(), phone.trim(), categoryId], (err: any) => {
      if (err) {
        console.error('Error saving to database:', err.message);
      } else {
        console.log('Contact added successfully!');
      }
    });
  } catch (error: any) {
    console.error('Error saving contact:', error.message);
  }
}