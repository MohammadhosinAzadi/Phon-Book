import { writeFileSync } from 'fs';


export default async function save(filePath: string, records: any[]): Promise<void> {
    try {
        await writeFileSync(filePath, JSON.stringify(records, null, 2), 'utf-8');
    } catch (e: any) {
        throw new Error(`Error writing to ${filePath}: ${e.message}`);
    }    
} 