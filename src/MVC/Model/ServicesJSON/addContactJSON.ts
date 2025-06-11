import { data } from "../../../DBSetup/JSON/setupJSON"
import { dataPath } from "../../../DBSetup/JSON/dataPath"
import { saveToJSON } from "../../../Repositories/JSON/JsonSetup/saveToJSON";
import { dataCategory } from "../../../DBSetup/JSON/setupJSON";
import { categoryPath } from "../../../DBSetup/JSON/dataPath";
import { Record } from "../../../Typs/record";
import { validatePhone } from "../../../Validation/Lojic-Validation/JSON/validatePhone";
import { validateName } from "../../../Validation/Lojic-Validation/JSON/validateName";
import { ValidationError } from "../../../Validation/validationError";

export async function addContactJSON(newContact : Record): Promise<void> {
  try {
    validatePhone(newContact.phone);
    validateName(newContact.name)
    data.push(newContact);
    if (newContact.category && dataCategory.includes(newContact.category) === false) {
      dataCategory.push(newContact.category);
    }
    await saveToJSON(categoryPath, dataCategory);
    await saveToJSON(dataPath, data);
    console.log("Contact saved successfully.");
  } catch (error :  any) {
    if (error instanceof ValidationError) {
      console.error("Validation error:", error.message);
    } else {
      console.error("Error while saving contact:", error);
    }
  }
}
  