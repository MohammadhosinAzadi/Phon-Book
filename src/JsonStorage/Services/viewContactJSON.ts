import { data } from "../../JsonStorage/FileManager/initJsonData";

export async function viewContactJSON(): Promise<void> {
  if (data.length === 0) {
    console.log("No contacts found.");
    return;
  }
   console.log("\n📋 Contact List:");
   console.table(data, ["name", "phone", "category"]);
}
