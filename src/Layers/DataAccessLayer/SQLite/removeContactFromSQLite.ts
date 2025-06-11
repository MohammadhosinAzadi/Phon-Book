import { db } from "../../../DBSetup/SQLite/setupSQLite";

export const removeContactFromSQLite = async (phone: string): Promise<void> => {
  const sql = `DELETE FROM contacts WHERE phone = ?`;
  return new Promise((resolve, reject) => {
    db.run(sql, [phone], function (err) {
      if (err) return reject(err);
      if (this.changes === 0) return reject(new Error("No contact found."));
      resolve();
    });
  });
};
