import { initDataFolder } from "../../DBSetup/JSON/initDataFolder";
import { dataPath, categoryPath } from "../../DBSetup/JSON/dataPath";
import { loadToJSON } from "../../Repositories/JSON/JsonSetup/loadToJSON";
import { saveToJSON } from "../../Repositories/JSON/JsonSetup/saveToJSON";
import { Record } from "../../Typs/record";

export let data: Record[] = [];
export let dataCategory: string[] = [];
export async function setupJSON(): Promise<void> {
  try {
    initDataFolder();
    data = loadToJSON(dataPath, []);
    dataCategory = loadToJSON(categoryPath, []);

    if (data.length === 0) {
      await saveToJSON(dataPath, data);
      console.log("Initialized data.json");
    }
    if (dataCategory.length === 0) {
      await saveToJSON(categoryPath, dataCategory);
      console.log("Initialized categories.json");
    }

    console.log("JSON storage is ready.");
  } catch (error: any) {
    console.error("Error during JSON setup:", error.message || error);
  }
}
