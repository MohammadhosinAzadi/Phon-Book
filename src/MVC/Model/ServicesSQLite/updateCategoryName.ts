import { db } from "../../../DBSetup/SQLite/setupSQLite";

export const updateCategoryName = (oldName: string, newName: string) => {
  return new Promise<void>((resolve, reject) => {
    db.run(
      `UPDATE categories SET name = ? WHERE name = ?`,
      [newName, oldName],
      (err: any) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};
