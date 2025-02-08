import { InvalidDataStructureError } from '../Errors/InvalidDataStructure';
import { JSONParseError } from '../Errors/JSONParse';
import { FileNotFoundError } from '../Errors/FileNotFound';
import { existsSync, readFileSync } from 'fs';

export default function loadData(filePath: string, defaultData: any[] = []): any[] {
    let data = defaultData;

    if (existsSync(filePath)) {
        try {
            const rawData = readFileSync(filePath, 'utf-8');
            try {
                const parsedData = JSON.parse(rawData);
                if (!Array.isArray(parsedData)) {
                    throw new InvalidDataStructureError(`Data in ${filePath} is not an array.`);
                }
                data = parsedData;
            } catch (e: any) {
                throw new JSONParseError(`Failed to parse JSON data in ${filePath}.`);
            }
        } catch (e: any) {
            if (e.code === 'ENOENT') {
                throw new FileNotFoundError(`File not found: ${filePath}`);
            }
            throw new Error(`Error reading file ${filePath}: ${e.message}`);
        }
    }

    return data;
}