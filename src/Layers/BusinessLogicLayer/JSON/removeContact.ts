import { removContactFromJSON } from '../../../Layers/DataAccessLayer/JSON/removContactFromJSON';
import { validatePhoneRemove } from '../../../Validation/Lojic-Validation/JSON/validatePhoneRemove'

export async function removeContact(phone: string): Promise<void> {
  await validatePhoneRemove(phone)
  await removContactFromJSON(phone);
}
