import { existsSync, mkdirSync } from 'fs';
import { dataFolder } from "../../DBSetup/JSON/dataPath";

export function initDataFolder(): void {
  if (!existsSync(dataFolder)) {
    mkdirSync(dataFolder);
  }
}