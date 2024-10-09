import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';


export interface Record {
    name: string;
    phone: number;
    category?: string;
}


class FileNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FileNotFoundError";
    }
}

class JSONParseError extends Error {
    constructor(message: string, public originalError: Error) {
        super(message);
        this.name = "JSONParseError";
    }
}

class InvalidDataStructureError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidDataStructureError";
    }
}


export const dataPath = join(__dirname, '../');
export const categories = ['colleagues', 'friends', 'family'];

let records: Record[] = [];

categories.forEach(category => {
    const filePath = join(dataPath, `${category}.json`);
    if (existsSync(filePath)) {
        try {
            const rawData = readFileSync(filePath, 'utf-8');
            try {
                const categoryRecords = JSON.parse(rawData);
                if (!Array.isArray(categoryRecords)) {
                    throw new InvalidDataStructureError(`Data in ${category}.json is not an array.`);
                }
                records = records.concat(categoryRecords);
            } catch (e: any) {
                throw new JSONParseError(`Failed to parse JSON data in ${category}.json.`, e);
            }
        } catch (e: any) {
            if (e.code === 'ENOENT') {
                throw new FileNotFoundError(`File not found: ${filePath}`);
            }
            throw new Error(`Error reading file ${filePath}: ${e.message}`);
        }
    }
});

export const data: Record[] = records;


export function save(): void {
    categories.forEach(category => {
        const filePath = join(dataPath, `${category}.json`);
        const categoryRecords = data.filter(record => record.category === category);
        try {
            writeFileSync(filePath, JSON.stringify(categoryRecords, null, 2), 'utf-8');
        } catch (e: any) {
            throw new Error(`Error writing to ${category}.json: ${e.message}`);
        }
    });
}

