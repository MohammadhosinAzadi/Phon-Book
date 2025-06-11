import { db } from '../../../DBSetup/SQLite/setupSQLite';

export function getOrCreateCategoryIdByName(categoryName: string | null): Promise<number> {
  return new Promise((resolve, reject) => {
    if (!categoryName) {
      return reject(new Error('Category name is required'));
    }
    const trimmedName = categoryName.trim();
    db.get('SELECT id FROM categories WHERE name = ?', [trimmedName], (err : any, row : any) => {
      if (err) {
        reject(err); 
      }else if(row) {
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

