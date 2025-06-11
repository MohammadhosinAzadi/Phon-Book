import { db } from '../../../DBSetup/SQLite/setupSQLite';
import { validatePhoneRemove } from '../../../Validation/Lojic-Validation/SQLite/validatePhoneRemove'

export async function removeContactsSQLite(contactId: number): Promise<void> {
  await validatePhoneRemove(contactId)  
  const sql = `DELETE FROM contacts WHERE id = ?`;
  db.run(sql, [contactId], (err: any) => {
    if (err) {
      console.error('Error deleting contact:', err.message);
    } else {
      console.log('Contact deleted successfully!');
    }
  });
}
