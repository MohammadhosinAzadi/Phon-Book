import { db } from '../../../DBSetup/SQLite/setupSQLite';
import { ValidationError } from "../../../Validation/validationError";

export function validatePhoneRemove(contactId: number): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!contactId || isNaN(contactId)) {
      return reject(new ValidationError("Contact ID must be a valid number."));
    }
    const sql = `SELECT id FROM contacts WHERE id = ?`;
    db.get(sql, [contactId], (err, row) => {
      if (err) return reject(err);
      if (!row) return reject(new ValidationError("Contact with this ID does not exist."));
      resolve();
    });
  });
}
