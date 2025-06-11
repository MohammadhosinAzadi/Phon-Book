import { db } from "../../../DBSetup/SQLite/setupSQLite";

export const categoryExists = async (categoryName: string | null): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    db.get("SELECT id FROM categories WHERE name = ?", [categoryName], (err, row) => {
      if (err) reject(err);
      resolve(!!row);
    });
  });
};
