import { db } from "../../../DBSetup/SQLite/setupSQLite";

export const getContactIdByPhone = async (phone: string): Promise<number | null> => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT id FROM contacts WHERE phone = ?";
    db.get(sql, [phone], (err: any, row: any) => {
      if (err) {
        reject("Error fetching contact ID: " + err.message);
        return;
      }
      if (row) {
        resolve(row.id);
      } else {
        resolve(null);
      }
    });
  });
};
