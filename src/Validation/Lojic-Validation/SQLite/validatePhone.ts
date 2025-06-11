import { ValidationError } from "../../../Validation/validationError";
import validator from "validator";
import { db } from "../../../DBSetup/SQLite/setupSQLite";

export function validatePhone(phone: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!phone || phone.trim().length === 0) {
      return reject(new ValidationError("Phone number cannot be empty."));
    }
    if (!validator.isMobilePhone(phone, "any")) {
      return reject(new ValidationError("Invalid phone number format."));
    }
    db.get("SELECT 1 FROM contacts WHERE phone = ?", [phone.trim()], (err, row) => {
      if (err) {
        return reject(new ValidationError("Database error while checking phone number."));
      }
      if (row) {
        return reject(new ValidationError("This phone number is already registered."));
      }
      resolve();
    });
  });
}
