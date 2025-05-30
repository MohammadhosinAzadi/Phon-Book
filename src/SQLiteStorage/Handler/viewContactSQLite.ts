import { getAllContacts } from "../../SQLiteStorage/Repositories/Contact/getAllContacts";
import { promptViewContacts } from "../../Cli/Prompts/promptViewContacts";

export const viewContactSQLite = async () => {
  try {
    const contacts = await getAllContacts();
    promptViewContacts(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};
