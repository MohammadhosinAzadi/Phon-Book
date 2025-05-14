import { db } from "../../DatabaseSetup/databaseSetup";

export const getCategories = async (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT DISTINCT name FROM categories", [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows.map((row: any) => row.name));
    });
  });
};
