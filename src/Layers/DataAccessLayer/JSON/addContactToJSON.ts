// src/dataAccess/contactDataAccess.ts
import { Record } from '../../../Typs/record';
import { data, dataCategory } from '../../../DBSetup/JSON/setupJSON';
import { dataPath, categoryPath } from '../../../DBSetup/JSON/dataPath';
import { saveToJSON } from '../../../Repositories/JSON/JsonSetup/saveToJSON';

export async function addContactToJSON(newContact: Record): Promise<void> {
  data.push(newContact);
  if (newContact.category && !dataCategory.includes(newContact.category)) {
    dataCategory.push(newContact.category);
    await saveToJSON(categoryPath, dataCategory);
  }
  await saveToJSON(dataPath, data);
}
