import { promptAddContact } from "../../../Layers/PresentationLayer/Cli/Prompts/PromptAddContact/index";
import { addContact } from "../../../Layers/BusinessLogicLayer/SQLite/addContact";

export async function addContactController(): Promise<void> {
  try {
    const contact = await promptAddContact();
    await addContact(contact);
    console.log("Contact added successfully!");
  } catch (error: any) {
    console.error("Error adding contact:", error.message || error);
  }
}
