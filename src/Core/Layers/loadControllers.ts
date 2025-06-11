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
    addContactController = (await import("../../Layers/ApplicationLayer/JSON/addContactController")).addContactController;
    removeContactController = (await import("../../Layers/ApplicationLayer/JSON/removeContactController")).removeContactController;
    viewContactController = (await import("../../Layers/ApplicationLayer/JSON/viewContactController")).viewContactController;
    editContactController = (await import("../../Layers/ApplicationLayer/JSON/editContactController")).editContactController;
    editCategoryController = (await import("../../Layers/ApplicationLayer/JSON/editCategoryController")).editCategoryController;
  } else {
    addContactController = (await import("../../Layers/ApplicationLayer/SQLite/addContactController")).addContactController;
    removeContactController = (await import("../../Layers/ApplicationLayer/SQLite/removeContactController")).removeContactController;
    viewContactController = (await import("../../Layers/ApplicationLayer/SQLite/viewContactController")).viewContactController;
    editContactController = (await import("../../Layers/ApplicationLayer/SQLite/editContactController")).editContactController;
    editCategoryController = (await import("../../Layers/ApplicationLayer/SQLite/editCategoryController")).editCategoryController;
  }

  return {
    addContactController,
    removeContactController,
    viewContactController,
    editContactController,
    editCategoryController
  };
}
