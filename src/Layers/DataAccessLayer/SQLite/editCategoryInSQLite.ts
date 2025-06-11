import { db } from "../../../DBSetup/SQLite/setupSQLite";

export const editCategoryInSQLite = (oldName: string, newName: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE categories SET name = ? WHERE name = ?`,
      [newName, oldName],
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};
