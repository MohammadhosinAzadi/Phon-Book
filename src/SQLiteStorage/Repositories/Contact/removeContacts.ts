import { db } from '../../../SQLiteStorage/DatabaseSetup/databaseSetup';

export function removeContacts(contactId: number): void {
  const sql = `DELETE FROM contacts WHERE id = ?`;
  db.run(sql, [contactId], (err: any) => {
    if (err) {
      console.error('Error deleting contact:', err.message);
    } else {
      console.log('Contact deleted successfully!');
    }
  });
}
