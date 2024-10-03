import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';


export interface Record {
    name: string;
    phone: number;
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


export const dataPath = join(__dirname, '../phonebook.json');

let result: Record[] = [];
if (existsSync(dataPath)) {
    try {
        const rawData = readFileSync(dataPath, 'utf-8');
        try {
            result = JSON.parse(rawData);
        } catch (e: any) {
            throw new JSONParseError('Failed to parse JSON data. Please check the JSON format.', e);
        }
    } catch (e: any) {
        if (e.code === 'ENOENT') {
            throw new FileNotFoundError(`File not found: ${dataPath}`);
        }
        throw new Error(`Error reading file: ${e.message}`);
    }
}

export const data: Record[] = result;


if (!Array.isArray(data)) {
    throw new InvalidDataStructureError('Data is not an array. Please check the JSON structure.');
}


export function save(): void {
    try {
        writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e: any) {
        throw new Error(`Error writing to the data file: ${e.message}`);
    }
}


