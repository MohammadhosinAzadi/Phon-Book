import { db } from "../../../SQLiteStorage/DatabaseSetup/databaseSetup";

export const getAllContacts = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT contacts.name, contacts.phone, categories.name AS category
      FROM contacts
      LEFT JOIN categories ON contacts.category_id = categories.id
    `;

    db.all(query, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};
