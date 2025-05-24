import { writeFileSync } from "fs";

export async function saveToJSON(filePath: string, records: any[]): Promise<void> {
    try {
        await writeFileSync(filePath, JSON.stringify(records, null, 2), "utf-8")
    } catch (error : any) {
        throw new Error(`Error writing to ${filePath}: ${error.message}`); 
    }
}