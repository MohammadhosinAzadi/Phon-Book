import { viewContact } from "../../../Layers/BusinessLogicLayer/JSON/viewContact";
import { promptViewContacts } from "../../../Layers/PresentationLayer/Cli/Prompts/promptViewContacts";

export async function viewContactController(): Promise<void> {
  try {
    const contacts = await viewContact();
    promptViewContacts(contacts);
  } catch (error: any) {
    console.error("Error displaying contacts:", error.message || error);
  }
}
