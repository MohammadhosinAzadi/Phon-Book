import sqlite3 from 'sqlite3';
sqlite3.verbose();
import  { db } from '../DatabaseStorage/createDB'

export function saveContact(name: string, phone: string, category: string): void {
  const sql = `INSERT INTO contacts (name, phone, category) VALUES (?, ?, ?)`;

  db.run(sql, [name, phone, category], (err : any) => {
    if (err) {
      console.error('Error saving to database', err.message);
    } else {
      console.log('The information was successfully saved to the database.');
    }
  });
}
