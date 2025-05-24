import { promptAddContact } from "../../Cli/Prompts/PromptAddContact/promptAddContact";
import { saveContacts } from "../../SQLiteStorage/Repositories/Contact/saveContacts";
import { promptAddConfirmation } from '../../Cli/Confirmations/promptAddConfirmation'

export const addContactSQLite = async (): Promise<void> => {
  try {
    const contact = await promptAddContact();
    const confirmed = await promptAddConfirmation(
      contact.name,
      contact.phone,
      contact.category
    );
    if (confirmed === false) {
      console.log("Operation cancelled.");
      return
    }
    await saveContacts(contact)
    console.log("Contact added successfully!");
  } catch (error: any) {
    console.error("An error occurred while adding the contact:", error.message);
  }
};