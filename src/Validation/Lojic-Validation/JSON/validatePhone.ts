import { data } from "../../../DBSetup/JSON/setupJSON";
import { ValidationError } from "../../validationError"
import validator from "validator";

export function validatePhone(phone: string): void {
    if (!phone || phone.length === 0) {
      throw new ValidationError("Phone number cannot be empty.");
    }
    if (!validator.isMobilePhone(phone, "any")) {
      throw new ValidationError("Invalid phone number format.");
    }
    const exists = data.some(c => c.phone === phone);
    if (exists) {
    throw new ValidationError("This phone number is already registered.");
  }
}