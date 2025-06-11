import { getAllContacts } from "../../../Repositories/SQLite/Contact/getAllContacts";
import { Record } from "../../../Typs/record";

export const viewContacts = async (): Promise<Record[]> => {
  const contacts = await getAllContacts();
  return contacts;
};
