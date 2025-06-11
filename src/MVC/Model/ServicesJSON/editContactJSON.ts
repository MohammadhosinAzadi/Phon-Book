import { saveToJSON } from "../../../Repositories/JSON/JsonSetup/saveToJSON";
import { data } from "../../../DBSetup/JSON/setupJSON";
import { dataPath } from "../../../DBSetup/JSON/dataPath";
import { Record } from "../../../Typs/record";

export async function editContactJSON(phone: string, updatedData: Record): Promise<void> {
  try {
    const contactIndex = data.findIndex((contact) => contact.phone === phone);
    if (contactIndex === -1) {
      console.log("No contact found with this phone number.");
      return;
    }
    data[contactIndex] = updatedData;
    await saveToJSON(dataPath, data);
    console.log("Contact updated successfully.");
  } catch (error: any) {
    console.error("Error editing contact:", error.message || error);
  }
}
