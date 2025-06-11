import { getContactByPhone } from "../../../Repositories/SQLite/Contact/getContactByPhone";
import { editContactsSQLite } from "../../../MVC/Model/ServicesSQLite/editContactsSQLite";
import { promptEditContact, getPromptUpdatedData } from "../../../MVC/View/Cli/Prompts/promptEditContact";

export const editContactController = async () => {
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
  await editContactsSQLite(phone, updatedData);
  console.log("Contact updated successfully!");
};

