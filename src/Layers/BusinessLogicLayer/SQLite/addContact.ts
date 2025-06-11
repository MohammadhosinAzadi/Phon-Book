import { Record } from "../../../Typs/record";
import { addContactInSQLite } from "../../../Layers/DataAccessLayer/SQLite/addContactInSQLite";
import { validateName } from '../../../Validation/Lojic-Validation/SQLite/validateName'
import { validatePhone } from '../../../Validation/Lojic-Validation/SQLite/validatePhone'

export async function addContact(contact: Record): Promise<void> {
  await validateName(contact.name)  
  await validatePhone(contact.phone)  
  await addContactInSQLite(contact);
}
