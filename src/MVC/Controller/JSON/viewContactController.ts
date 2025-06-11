import { getAllContactsJSON } from "../../../Repositories/JSON/getAllContactsJSON";
import { promptViewContacts } from "../../../MVC/View/Cli/Prompts/promptViewContacts";

export async function viewContactController(): Promise<void> {
  const contacts = await getAllContactsJSON();
  promptViewContacts(contacts);
}
