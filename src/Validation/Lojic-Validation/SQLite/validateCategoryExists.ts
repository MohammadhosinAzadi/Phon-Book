import { db } from "../../../DBSetup/SQLite/setupSQLite";

export const validateCategoryExists = (name: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT 1 FROM categories WHERE name = ?`, [name], (err, row) => {
      if (err) reject(err);
      else resolve(!!row);
    });
  });
};
