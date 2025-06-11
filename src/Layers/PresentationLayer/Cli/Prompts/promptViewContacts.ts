import { Record } from "../../../../Typs/record";

export const promptViewContacts = (contacts: Record[]) => {
  console.log("\n--- 📒 Contact List ---");
  console.table(
    contacts.map((row) => ({
      Name: row.name,
      Phone: row.phone,
      Category: row.category || "None",
    }))
  );
  console.log("-------------------------\n");
};
