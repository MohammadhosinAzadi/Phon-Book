import { ValidationError } from "../../../Validation/validationError";
import { data } from "../../../DBSetup/JSON/setupJSON";
import validator from "validator";

export function validatePhoneRemove(phone: string): void {
    if (!phone || phone.length === 0) {
      throw new ValidationError("Phone number cannot be empty.");
    }
    if (!validator.isMobilePhone(phone, "any")) {
      throw new ValidationError("Invalid phone number format.");
    }
    const exists = data.some(c => c.phone === phone);
    if (!exists) {
      throw new ValidationError("This phone number does not exist.");
  }
}