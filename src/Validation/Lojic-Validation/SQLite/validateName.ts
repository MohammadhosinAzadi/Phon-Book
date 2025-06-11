import { db } from "../../../DBSetup/SQLite/setupSQLite";
import { ValidationError } from "../../../Validation/validationError";

export function validateName(name: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!name || name.trim() === "") {
      return reject(new ValidationError("Name must not be empty."));
    }
    const trimmedName = name.trim().toLowerCase();
    const sql = `SELECT name FROM categories WHERE LOWER(name) = ?`;
    db.get(sql, [trimmedName], (err, row) => {
        if (err) {
            return reject(new Error("Database error: " + err.message));
        } else if (row) {
        return reject(new ValidationError("The contact name cannot be the same as any category name."));
      }
      resolve();
    });
  });
}
