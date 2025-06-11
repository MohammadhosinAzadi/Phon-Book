import { data } from '../../../DBSetup/JSON/setupJSON';
import { dataPath } from '../../../DBSetup/JSON/dataPath';
import { saveToJSON } from '../../../Repositories/JSON/JsonSetup/saveToJSON';
import { validatePhoneRemove } from '../../../Validation/Lojic-Validation/JSON/validatePhoneRemove';
import { ValidationError } from '../../../Validation/validationError';

export async function removContactFromJSON(phone: string): Promise<void> {
  try {
    validatePhoneRemove(phone);
    const index = data.findIndex(contact => contact.phone === phone);
    if (index === -1) {
      throw new ValidationError('No contact found with this phone number.');
    }
    data.splice(index, 1);
    await saveToJSON(dataPath, data);
  } catch (error: any) {
    if (error instanceof ValidationError) {
      throw error;
    }
    throw new Error('Failed to remove contact: ' + error.message);
  }
}
