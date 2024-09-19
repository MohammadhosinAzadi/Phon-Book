import {readFileSync} from 'fs'; 
import {join} from 'path';




export const dataPath = join(__dirname, '../phonbook.json');
export const rawData = readFileSync(dataPath, 'utf-8');
export const data = JSON.parse(rawData);