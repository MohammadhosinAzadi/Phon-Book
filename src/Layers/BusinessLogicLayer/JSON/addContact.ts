import { Record } from '../../../Typs/record';
import {validateName } from '../../../Validation/UI-Validation/validateName';
import { validatePhone } from '../../../Validation/UI-Validation/validatePhone';
import { addContactToJSON } from '../../DataAccessLayer/JSON/addContactToJSON';

export async function addContact(contact: Record): Promise<void> {
  validateName(contact.name);
  validatePhone(contact.phone);
  await addContactToJSON(contact);
}
