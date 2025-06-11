import {fileExists} from "../../../Repositories/JSON/JsonSetup/fileExists";
import {readFile} from "../../../Repositories/JSON/JsonSetup/readFile";
import {parsJSON} from "../../../Repositories/JSON/JsonSetup/parsJSON";
import { InvalidDataStructureError } from "../../../Repositories/JSON/Errors/InvalidDataStructureError";

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
