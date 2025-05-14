import { db } from '../../DatabaseSetup/databaseSetup';

export function getOrCreateCategoryIdByName(categoryName: string): Promise<number> {
  return new Promise((resolve, reject) => {
    
    const trimmedName = categoryName.trim();

    db.get('SELECT id FROM categories WHERE name = ?', [trimmedName], (err : any, row : any) => {
      if (err) {
        reject(err); 
      }

      if (row) {
        resolve(row.id); 
      } else {
        db.run('INSERT INTO categories (name) VALUES (?)', [trimmedName], function (insertErr) {
          if (insertErr) {
            reject(insertErr); 
          } else {
            resolve(this.lastID); 
          }
        });
      }
    });
  });
}

