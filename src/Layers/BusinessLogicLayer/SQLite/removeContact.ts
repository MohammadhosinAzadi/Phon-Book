import { validatePhoneRemove } from "../../../Validation/Lojic-Validation/SQLite/validatePhoneRemove";
import { removeContactFromSQLite } from "../../../Layers/DataAccessLayer/SQLite/removeContactFromSQLite";
import { getContactIdByPhone } from "Repositories/SQLite/Contact/getContactIdByPhone";

export const removeContact = async (phone: string): Promise<void> => {
  const contactId = await getContactIdByPhone(phone)  
  if (contactId === null) {
    throw new Error("Contact not found.");
  }
  await validatePhoneRemove(contactId); 
  await removeContactFromSQLite(phone); 
};

