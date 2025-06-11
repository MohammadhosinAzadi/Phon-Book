import { promptEditContact, getPromptUpdatedData } from "../../../Layers/PresentationLayer/Cli/Prompts/promptEditContact";
import { editContact } from "../../../Layers/BusinessLogicLayer/SQLite/editContact";

export const editContactController = async (): Promise<void> => {
  const phone = await promptEditContact();
  if (phone === null) {
    console.log("Cancelled or no phone entered.");
    return;
  }
  await editContact(phone);
};
