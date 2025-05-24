import { existsSync, mkdirSync } from 'fs';
import { dataFolder } from "JsonStorage/FileManager/dataPath";

export function initDataFolder(): void {
  if (!existsSync(dataFolder)) {
    mkdirSync(dataFolder);
  }
}