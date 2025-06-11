import { promptAddContact } from "../../../MVC/View/Cli/Prompts/PromptAddContact/index";
import { addContactsSQLite } from "../../../MVC/Model/ServicesSQLite/addContactsSQLite";
import { promptAddConfirmation } from "../../../MVC/View/Cli/Confirmations/promptAddConfirmation"

export const addContactController = async (): Promise<void> => {
  try {
    const contact = await promptAddContact();
    const confirmed = await promptAddConfirmation(
      contact.name,
      contact.phone,
      contact.category ?? ''
    );
    if (confirmed === false) {
      console.log("Operation cancelled.");
      return
    }
    await addContactsSQLite(contact)
    console.log("Contact added successfully!");
  } catch (error: any) {
    console.error("An error occurred while adding the contact:", error.message);
  }
};