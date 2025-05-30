import { saveToJSON } from "../../JsonStorage/JsonSetup/saveToJSON";
import { promptEditContact, getPromptUpdatedData } from "../../Cli/Prompts/promptEditContact";
import { data } from "../../JsonStorage/FileManager/initJsonData";
import { dataPath } from "../../JsonStorage/FileManager/dataPath";

export async function editContactJSON(): Promise<void> {
  try {
    const phone = await promptEditContact();
    if (phone === null) {
      console.log("Edit cancelled or no phone number entered.");
      return;
    }

    const contactIndex = data.findIndex((contact) => contact.phone === phone);
    if (contactIndex === -1) {
      console.log("No contact found with this phone number.");
      return;
    }

    const contact = data[contactIndex];
    const updatedData = await getPromptUpdatedData(contact);

    data[contactIndex] = updatedData;
    await saveToJSON(dataPath, data);
    console.log("Contact updated successfully.");
  } catch (error: any) {
    console.error("Error editing contact:", error.message || error);
  }
}
