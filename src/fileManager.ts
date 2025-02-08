import { join } from 'path';
import * as fileHandler from 'FileHandlers/index'

export interface Record {
    name: string;
    phone: number;
    category?: string;
}

export const dataPath = join(__dirname, '../phonebook.json');
export const categoryPath = join(__dirname, '../categories.json');

export const data: Record[] = fileHandler.loadData(dataPath, []);
export const availableCategories: string[] = fileHandler.loadData(categoryPath, []);

fileHandler.save(dataPath, data)
fileHandler.save(categoryPath, availableCategories)