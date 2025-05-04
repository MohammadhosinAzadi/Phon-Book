import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

import * as fileHandler from './JsonStorage/FileHandlers'

export interface Record {
    name: string;
    phone: string;
    category?: string;
}

const dataFolder = join(__dirname, '../data');

if (!existsSync(dataFolder)) {
    mkdirSync(dataFolder);
}

export const dataPath = join(dataFolder, '../data/phonebook.json');
export const categoryPath = join(dataFolder, '../data/categories.json');

export const data: Record[] = fileHandler.loadData(dataPath, []);
export const availableCategories: string[] = fileHandler.loadData(categoryPath, []);

if (data.length === 0) {
    fileHandler.save(dataPath, data); 
}
if (availableCategories.length === 0) {
    fileHandler.save(categoryPath, availableCategories); 
}