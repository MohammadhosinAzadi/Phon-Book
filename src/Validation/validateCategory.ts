import { db } from "../DatabaseSetup/databaseSetup";

export function validateCategory(category: string | null): Promise<string | null> {
  return new Promise((resolve, reject) => {
    if (!category) return resolve(null);

    db.get("SELECT * FROM categories WHERE name = ?", [category], (err, row) => {
      if (err) return reject(err);

      if (row) {
        return resolve(category); 
      }

      
      db.run("INSERT INTO categories (name) VALUES (?)", [category], (err) => {
        if (err) {
          if ((err as any).code === "SQLITE_CONSTRAINT") {
            
            return resolve(category);
          }
          return reject(err); 
        }

        resolve(category);
      });
    });
  });
}

