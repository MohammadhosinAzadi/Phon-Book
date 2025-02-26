import { data, dataPath, availableCategories, categoryPath } from "./fileManager";
import  save  from "./FileHandlers/save";

export function add(name:string, phone:string, category?: string) : void{
    const validName = name;
    const validPhone = phone;
    const validCategory = category;
    data.push({name: validName, phone: validPhone, category: validCategory});
    save(categoryPath, availableCategories)
    save(dataPath, data);
}

