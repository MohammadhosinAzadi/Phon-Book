import { db } from "../../DatabaseSetup/databaseSetup";

export const categoryExists = async (categoryName: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    db.get("SELECT id FROM categories WHERE name = ?", [categoryName], (err, row) => {
      if (err) reject(err);
      resolve(!!row);
    });
  });
};
