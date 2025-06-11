import { data } from '../../DBSetup/JSON/setupJSON';
import { Record } from '../../Typs/record';

export function getContactByPhone(phone: string): Record | undefined {
  return data.find(contact => contact.phone === phone);
}
