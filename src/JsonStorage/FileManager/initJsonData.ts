import { loadToJSON } from "../../JsonStorage/JsonSetup/loadToJSON";
import { saveToJSON } from "../../JsonStorage/JsonSetup/saveToJSON";
import { dataPath, categoryPath } from "../../JsonStorage/FileManager/dataPath";
import { initDataFolder } from "../../JsonStorage/FileManager/initDataFolder";
import { Record } from "../../Typs/record";

initDataFolder();

export const data: Record[] = loadToJSON(dataPath, []);
export const dataCategory: string[] = loadToJSON(categoryPath, []);

if (data.length === 0) saveToJSON(dataPath, data);
if (dataCategory.length === 0) saveToJSON(categoryPath, dataCategory);