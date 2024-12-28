import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { FileNotFoundError, JSONParseError, InvalidDataStructureError } from "./baseError";

export interface Record {
    name: string;
    phone: number;
    category?: string;
}

export const dataPath = join(__dirname, '../phonebook.json');
export const categoryPath = join(__dirname, '../categories.json')

let records: Record[] = [];
let categories: string[] = [];

if (existsSync(dataPath)) {
    try {
        const rawData = readFileSync(dataPath, 'utf-8')
        try {
            const parsedData = JSON.parse(rawData);
            if (!Array.isArray(parsedData)) {
                throw new InvalidDataStructureError('Data in phonebook.json is not an array.');    
            }
            records = parsedData;
        } catch (e: any) {
            throw new JSONParseError('Failed to parse JSON data in phonebook.json.', e);   
        }
    } catch (e: any) {
        if (e.code === 'ENOENT') {
            throw new FileNotFoundError(`File not found: ${dataPath}`);
        }
        throw new Error(`Error reading file ${dataPath}: ${e.message}`);
    }
}

if (existsSync(categoryPath)) {
    try {
        const rawData = readFileSync(categoryPath, 'utf-8');
        categories = JSON.parse(rawData);
        if (!Array.isArray(categories)) {
            categories = [];
        }
    } catch (e: any) {
        categories = []
    }
}

export const data: Record[] = records;
export const availableCategories: string[] = categories;

export function save(): void {
    try {
        writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e: any) {
        throw new Error(`Error writing to phonebook.json: ${e.message}`);
    }    
}

export function saveCategories(): void {
    try {
        writeFileSync(categoryPath, JSON.stringify(availableCategories, null, 2), 'utf-8');
    } catch (e: any) {
        throw new Error(`Error writing to categories.json: ${e.message}`);
    }
}

