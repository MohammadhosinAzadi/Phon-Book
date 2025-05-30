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
    addContactController = (await import("../JsonStorage/Services/addContactJSON")).addContactJSON;
    removeContactController = (await import("../JsonStorage/Services/removeContactJSON")).removeContactJSON;
    viewContactController = (await import("../JsonStorage/Services/viewContactJSON")).viewContactJSON;
    editContactController = (await import("../JsonStorage/Services/editContactJSON")).editContactJSON;
    editCategoryController = (await import("../JsonStorage/Services/editCategoryJSON")).editCategoryJSON;
  } else {
    addContactController = (await import("../SQLiteStorage/Handler/addContactSQLite")).addContactSQLite;
    removeContactController = (await import("../SQLiteStorage/Handler/removeContactSQLite")).removeContactSQLite;
    viewContactController = (await import("../SQLiteStorage/Handler/viewContactSQLite")).viewContactSQLite;
    editContactController = (await import("../SQLiteStorage/Handler/editContactSQLite")).editContactSQLite;
    editCategoryController = (await import("../SQLiteStorage/Handler/editCategorySQLite")).editCategorySQLite;
  }

  return {
    addContactController,
    removeContactController,
    viewContactController,
    editContactController,
    editCategoryController
  };
}
