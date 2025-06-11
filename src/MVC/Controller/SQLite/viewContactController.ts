import { getAllContacts } from "../../../Repositories/SQLite/Contact/getAllContacts";
import { promptViewContacts } from "../../../MVC/View/Cli/Prompts/promptViewContacts";

export const viewContactController = async () => {
  try {
    const contacts = await getAllContacts();
    promptViewContacts(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};
