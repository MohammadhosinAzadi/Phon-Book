import { promptEditContact, getPromptUpdatedData } from '../../../Layers/PresentationLayer/Cli/Prompts/promptEditContact';
import { editContact } from '../../../Layers/BusinessLogicLayer/JSON/editContact';
import { getContactByPhone } from '../../../Repositories/JSON/getContactByPhone';

export async function editContactController(): Promise<void> {
  try {
    const phone = await promptEditContact();
    if (phone === null) return;
    const contact = getContactByPhone(phone);
    if (contact === null) {
      console.log("Contact not found.");
      return;
    }
    const updatedData = await getPromptUpdatedData(contact);
    await editContact(phone, updatedData);

  } catch (error: any) {
    console.error("An error occurred while editing the contact:", error.message);
  }
}
