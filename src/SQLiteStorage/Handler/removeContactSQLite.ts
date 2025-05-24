import { getContactIdByPhone } from "../../SQLiteStorage/Repositories/Contact/getContactIdByPhone";
import { removeContacts } from "../../SQLiteStorage/Repositories/Contact/removeContacts";
import { promptRemoveContact } from "../../Cli/Prompts/promptRemoveContact";
import { promptRemoveConfirmation } from "../../Cli/Confirmations/promptRemoveConfirmation";

const handleError = (message: string): void => {
  console.log(message);
};

export const removeContactSQLite = async (): Promise<void> => {
  try {
    const phone = await promptRemoveContact();
    const confirmed = await promptRemoveConfirmation(phone);
    if (confirmed === false) {
      handleError("Operation cancelled.");
    }
    const id =  await getContactIdByPhone(phone);
    if (!id) {
      return handleError("No contact found with that phone number.");
    }
    removeContacts(id);
    console.log("Contact removed successfully.");
  } catch (error: any) {
    console.error("Error in removing contact:", error.message);
  }
};
