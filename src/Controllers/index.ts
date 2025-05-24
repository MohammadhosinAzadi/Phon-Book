import { currentStorage, StorageType } from "../Config/storageConfig";

export interface Controllers {
  addContactController: () => Promise<void>;
  removeContactController: () => Promise<void>;
  viewContactController: () => Promise<void>;
  editContactController: () => Promise<void>;
  editCategoryController: () => Promise<void>;
}

export async function loadControllers(): Promise<Controllers> {
  let addContactController: () => Promise<void>;
  let removeContactController: () => Promise<void>;
  let viewContactController: () => Promise<void>;
  let editContactController: () => Promise<void>;
  let editCategoryController: () => Promise<void>;

  if (currentStorage === StorageType.JSON) {
    addContactController = (await import("../JsonStorage/Services/addContactJSON.js")).addContactJSON;
    removeContactController = (await import("../JsonStorage/Services/removeContactJSON.js")).removeContactJSON;
    viewContactController = (await import("../JsonStorage/Services/viewContactJSON.js")).viewContactJSON;
    editContactController = (await import("../JsonStorage/Services/editContactJSON.js")).editContactJSON;
    editCategoryController = (await import("../JsonStorage/Services/editCategoryJSON.js")).editCategoryJSON;
  } else {
    addContactController = (await import("../SQLiteStorage/Handler/addContactSQLite.js")).addContactSQLite;
    removeContactController = (await import("../SQLiteStorage/Handler/removeContactSQLite.js")).removeContactSQLite;
    viewContactController = (await import("../SQLiteStorage/Handler/viewContactSQLite.js")).viewContactSQLite;
    editContactController = (await import("../SQLiteStorage/Handler/editContactSQLite.js")).editContactSQLite;
    editCategoryController = (await import("../SQLiteStorage/Handler/editCategorySQLite.js")).editCategorySQLite;
  }

  return {
    addContactController,
    removeContactController,
    viewContactController,
    editContactController,
    editCategoryController
  };
}
