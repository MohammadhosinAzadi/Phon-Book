import { viewContacts } from "../../../Layers/BusinessLogicLayer/SQLite/viewContact";
import { promptViewContacts } from "../../../Layers/PresentationLayer/Cli/Prompts/promptViewContacts";

export const viewContactController = async () => {
  try {
    const contacts = await viewContacts();
    promptViewContacts(contacts);
  } catch (error) {
    console.error("Error viewing contacts:", error);
  }
};
