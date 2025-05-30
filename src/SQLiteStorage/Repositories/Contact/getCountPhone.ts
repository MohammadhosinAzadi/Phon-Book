import { db } from '../../../SQLiteStorage/DatabaseSetup/databaseSetup'

export async function getCountPhone(phone: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        db.get('SELECT COUNT(*) AS count FROM contacts WHERE phone = ?', [phone], (err: any, row: any) => {
            if (err) {
                reject(err);
                return
            }
            resolve (row.count > 0)
        });
    })
}