import { Record } from '../../../Typs/record';
import { validateName } from '../../../Validation/UI-Validation/validateName';
import { validatePhone } from '../../../Validation/UI-Validation/validatePhone';
import { editContactInJSON } from '../../../Layers/DataAccessLayer/JSON/editContactInJSON';

export async function editContact(phone: string, updatedData: Record): Promise<void> {
  validateName(updatedData.name);
  validatePhone(updatedData.phone);
  await editContactInJSON(phone, updatedData);
}
