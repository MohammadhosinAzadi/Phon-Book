import { db } from "../DatabaseSetup/databaseSetup";

export const promptViewContacts = () => {
  const query = `
    SELECT contacts.name, contacts.phone, categories.name AS category
    FROM contacts
    LEFT JOIN categories ON contacts.category_id = categories.id
  `;

  db.all(query, (err, rows) => {
    if (err) {
      console.error("Error fetching contacts:", err.message);
      return;
    }

    console.log("\n--- Contact List ---");
    rows.forEach((row : any) => {
      console.log(`Name: ${row.name}, Phone: ${row.phone}, Category: ${row.category || "None"}`);
    });
    console.log("--------------------\n");
  });
};
