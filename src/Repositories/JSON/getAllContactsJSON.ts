import { data } from "../../DBSetup/JSON/setupJSON";
import { Record } from "../../Typs/record";

export async function getAllContactsJSON(): Promise<Record[]> {
  return data;
}
