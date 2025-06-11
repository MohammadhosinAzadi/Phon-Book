import { currentStorage, StorageType } from "../../Config/storageConfig";

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
    addContactController = (await import("../../MVC/Controller/JSON/addContactController")).addContactController;
    removeContactController = (await import("../../MVC/Controller/JSON/removeContactController")).removeContactController;
    viewContactController = (await import("../../MVC/Controller/JSON/viewContactController")).viewContactController;
    editContactController = (await import("../../MVC/Controller/JSON/editContactController")).editContactController;
    editCategoryController = (await import("../../MVC/Controller/JSON/editCategoryController")).editCategoryController;
  } else {
    addContactController = (await import("../../MVC/Controller/SQLite/addContactController")).addContactController;
    removeContactController = (await import("../../MVC/Controller/SQLite/removeContactController")).removeContactController;
    viewContactController = (await import("../../MVC/Controller/SQLite/viewContactController")).viewContactController;
    editContactController = (await import("../../MVC/Controller/SQLite/editContactController")).editContactController;
    editCategoryController = (await import("../../MVC/Controller/SQLite/editCategoryController")).editCategoryController;
  }

  return {
    addContactController,
    removeContactController,
    viewContactController,
    editContactController,
    editCategoryController
  };
}
