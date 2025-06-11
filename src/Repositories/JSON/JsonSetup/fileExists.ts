import { existsSync } from "fs";

export function fileExists(filePath: string): boolean {
    return existsSync(filePath);
}