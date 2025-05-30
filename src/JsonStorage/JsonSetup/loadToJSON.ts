import {fileExists} from '../../JsonStorage/JsonSetup/fileExists';
import {readFile} from '../../JsonStorage/JsonSetup/readFile';
import {parsJSON} from '../../JsonStorage/JsonSetup/parsJSON';
import { InvalidDataStructureError } from "../../JsonStorage/Errors/InvalidDataStructureError";

export function validateIsArray(data: unknown, filePath: string): void {
    if (!Array.isArray(data)) {
        throw new InvalidDataStructureError(`Data in ${filePath} is not an array.`);
    }
}

export function loadToJSON(filePath: string, defaultData: any[] = []): any[] {
    if (!fileExists(filePath)) return defaultData;
    const rawData = readFile(filePath);
    const parsedData = parsJSON(rawData);
    validateIsArray(parsedData, filePath);
    return parsedData;
}
