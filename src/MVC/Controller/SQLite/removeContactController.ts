import { getContactIdByPhone } from "../../../Repositories/SQLite/Contact/getContactIdByPhone";
import { removeContactsSQLite } from "../../../MVC/Model/ServicesSQLite/removeContactsSQLite";
import { promptRemoveContact } from "../../../MVC/View/Cli/Prompts/promptRemoveContact";
import { promptRemoveConfirmation } from "../../../MVC/View/Cli/Confirmations/promptRemoveConfirmation";

const handleError = (message: string): void => {
  console.log(message);
};

export const removeContactController = async (): Promise<void> => {
  try {
    const phone = await promptRemoveContact();
    const confirmed = await promptRemoveConfirmation(phone);
    if (confirmed === false) {
      handleError("Operation cancelled.");
    }
    const id =  await getContactIdByPhone(phone);
    if (id === null) {
      return handleError("No contact found with that phone number.");
    }
    removeContactsSQLite(id);
    console.log("Contact removed successfully.");
  } catch (error: any) {
    console.error("Error in removing contact:", error.message);
  }
};
