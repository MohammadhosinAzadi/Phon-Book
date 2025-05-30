import { readFileSync } from "fs";
import { FileNotFoundError } from "../../JsonStorage/Errors/FileNotFoundError"

export function readFile(filePath: string) {
    try {
        return readFileSync(filePath, 'utf-8') 
    } catch (e: any) {
       if (e.code === 'ENOENT') {
            throw new FileNotFoundError(`File not found: ${filePath}`);
        } 
       throw new Error(`Error reading file ${filePath}: ${e.message}`);
    }
}