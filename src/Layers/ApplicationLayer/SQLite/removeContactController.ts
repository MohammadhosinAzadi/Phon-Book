import { promptRemoveContact } from "../../../Layers/PresentationLayer/Cli/Prompts/promptRemoveContact";
import { promptRemoveConfirmation } from "../../../Layers/PresentationLayer/Cli/Confirmations/promptRemoveConfirmation";
import { removeContact } from "../../../Layers/BusinessLogicLayer/SQLite/removeContact";

export const removeContactController = async (): Promise<void> => {
  try {
    const phone = await promptRemoveContact();
    const confirm = await promptRemoveConfirmation(phone);
    if (!confirm) return console.log("Operation cancelled.");

    await removeContact(phone);
    console.log("Contact removed successfully!");
  } catch (error: any) {
    console.error("Error removing contact:", error.message || error);
  }
};
