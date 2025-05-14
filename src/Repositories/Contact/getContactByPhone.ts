import { db } from "../../DatabaseSetup/databaseSetup";

export const getContactByPhone = (phone: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT contacts.*, categories.name AS category 
       FROM contacts
       LEFT JOIN categories ON contacts.category_id = categories.id
       WHERE contacts.phone = ?`,
      [phone],
      (err, row) => {
        if (err) return reject(err);
        resolve(row);
      }
    );
  });
};