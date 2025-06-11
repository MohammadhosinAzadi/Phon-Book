import { validateCategoryExists } from "../../../Validation/Lojic-Validation/SQLite/validateCategoryExists";
import { editCategoryInSQLite } from "../../../Layers/DataAccessLayer/SQLite/editCategoryInSQLite";

export const editCategory = async (oldName: string, newName: string): Promise<string | true> => {
    const exists = await validateCategoryExists(newName);
    if (exists) return "This category name already exists.";
    await editCategoryInSQLite(oldName, newName);
    return true;
};
