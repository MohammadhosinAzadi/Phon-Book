import { Record } from '../../../Typs/record';
import { data } from '../../../DBSetup/JSON/setupJSON';
import { dataPath } from '../../../DBSetup/JSON/dataPath';
import { saveToJSON } from '../../../Repositories/JSON/JsonSetup/saveToJSON';

export async function editContactInJSON(phone: string, updatedData: Record): Promise<void> {
  const contactIndex = data.findIndex(contact => contact.phone === phone);
  if (contactIndex === -1) {
    console.log("No contact found with this phone number.");
    return;
  }
  data[contactIndex] = updatedData;
  await saveToJSON(dataPath, data);
  console.log("Contact updated successfully.");
}
