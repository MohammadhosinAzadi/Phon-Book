import { getContactIdByPhone } from "../Repositories/Contact/getContactIdByPhone";
import { removeContacts } from "../Repositories/Contact/removeContacts";
import { promptRemoveContact } from "../Cli/Prompts/promptRemoveContact";
import { promptConfirmation } from "../Cli/Confirmations/promptConfirmation";

const handleError = (message: string): void => {
  console.log(message);
};

export const removeContactController = async (): Promise<void> => {
  try {
    const phone = await promptRemoveContact();
    if (!phone) {
      return handleError("Phone number is required.");
    }

    const confirmed = await promptConfirmation(
      `Are you sure you want to delete the contact with phone: ${phone}?`
    );
    if (!confirmed) {
      return handleError("Operation cancelled.");
    }

    const id = await getContactIdByPhone(phone);
    if (!id) {
      return handleError("No contact found with that phone number.");
    }

    await removeContacts(id);
    console.log("Contact removed successfully.");
    
  } catch (error: any) {
    console.error("Error in removing contact:", error.message);
  }
};
