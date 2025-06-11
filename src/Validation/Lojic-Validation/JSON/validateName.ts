import { dataCategory } from "../../../DBSetup/JSON/setupJSON";
import { ValidationError } from "../../../Validation/validationError"

export function validateName(name: string): void {
  if (!name || name === "") {
    throw new ValidationError("Name must not be empty.");
  }
  const lowerName = name.trim().toLowerCase();
  const existsInCategories = dataCategory.some(cat => cat.toLowerCase() === lowerName);
  if (existsInCategories) {
    throw new ValidationError("The contact name cannot be the same as any category name.");
  }
}
