import { saveToJSON } from "../../../Repositories/JSON/JsonSetup/saveToJSON";
import { data } from "../../../DBSetup/JSON/setupJSON";
import { dataPath } from "../../../DBSetup/JSON/dataPath";
import { validatePhoneRemove } from "../../../Validation/Lojic-Validation/JSON/validatePhoneRemove"
import { ValidationError } from "../../../Validation/validationError";

export async function removeContactJSON(phone: string): Promise<void> {
  try {
    validatePhoneRemove(phone)
    const contactIndex = data.findIndex(contact => contact.phone === phone);
    if (contactIndex === -1) {
      console.log("No contact found with this phone number.");
      return;
    }
    data.splice(contactIndex, 1);
    await saveToJSON(dataPath, data);
    console.log("Contact removed successfully.");
  } catch (error: any) {
    if (error instanceof ValidationError) {
      console.error("Validation error:", error.message);
    } else {
      console.error("An error occurred while removing the contact:", error.message);
    }
  }
}
  