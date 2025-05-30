import { getContactByPhone } from "../../SQLiteStorage/Repositories/Contact/getContactByPhone";
import { editContacts } from "../../SQLiteStorage/Repositories/Contact/editContacts";
import { promptEditContact, getPromptUpdatedData } from "../../Cli/Prompts/promptEditContact";

export const editContactSQLite = async () => {
  const phone = await promptEditContact();
  if (phone === null) {
    console.log("Cancelled or no phone entered.");
    return;
  }
  const contact = await getContactByPhone(phone);
  if (contact === null) {
    console.log("Contact not found!");
    return;
  }
  const updatedData = await getPromptUpdatedData(contact);
  await editContacts(phone, updatedData);
  console.log("Contact updated successfully!");
};

