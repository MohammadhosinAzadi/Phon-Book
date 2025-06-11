import { getContactByPhone } from "../../../Repositories/SQLite/Contact/getContactByPhone";
import { editContactInSQLite } from "../../../Layers/DataAccessLayer/SQLite/editContactInSQLite";
import { getPromptUpdatedData } from "../../../Layers/PresentationLayer/Cli/Prompts/promptEditContact";
import { Record } from "../../../Typs/record";

export const editContact = async (phone: string): Promise<void> => {
  const contact = await getContactByPhone(phone);
  if (contact === null) {
    console.log("Contact not found.");
    return;
  }
  const updatedData: Record = await getPromptUpdatedData(contact);
  await editContactInSQLite(phone, updatedData);
  console.log("Contact updated successfully!");
};
