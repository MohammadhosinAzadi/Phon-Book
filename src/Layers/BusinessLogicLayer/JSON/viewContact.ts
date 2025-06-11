import { getAllContactsJSON } from "../../../Repositories/JSON/getAllContactsJSON";
import { Record } from "../../../Typs/record";

export async function viewContact(): Promise<Record[]> {
  const contacts = await getAllContactsJSON();
  return contacts;
}
