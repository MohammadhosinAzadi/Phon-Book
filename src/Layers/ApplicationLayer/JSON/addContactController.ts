import { promptAddContact } from '../../../Layers/PresentationLayer/Cli/Prompts/PromptAddContact/index';
import { promptAddConfirmation } from '../../../Layers/PresentationLayer/Cli/Confirmations/promptAddConfirmation';
import { addContact } from '../../../Layers/BusinessLogicLayer/JSON/addContact';
import { Record } from '../../../Typs/record';

export async function addContactController() {
  try {
    const contact: Record = await promptAddContact();
    const confirmed = await promptAddConfirmation(contact.name, contact.phone, contact.category ?? '');
    if (!confirmed) {
      console.log("Operation cancelled.");
      return;
    }
    await addContact(contact);
    console.log("Contact added successfully!");
  } catch (error: any) {
    console.error("An error occurred while adding the contact:", error.message);
  }
}
