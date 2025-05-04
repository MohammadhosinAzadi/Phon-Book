import sqlite3 from 'sqlite3';
sqlite3.verbose();
import  { db } from '../DatabaseStorage/createDB'

export function removeContact(phone: string): void {
  const trimmedPhone = phone.trim();

  const sql = `DELETE FROM contacts WHERE phone = ?`;

  db.run(sql, [trimmedPhone], function (this: sqlite3.RunResult, err : any) {
    if (err) {
      console.error('Error deleting contact', err.message);
    } else if (this.changes === 0) {
      console.log('No contact with the requested number was found.');
    } else {
      console.log('Contact successfully deleted from database.');
    }
  });
}

