import { currentStorage, StorageType } from "../Config/storageConfig";
import { setupJSON } from "../DBSetup/JSON/setupJSON";
import { setupSQLite } from "../DBSetup/SQLite/setupSQLite";

export async function dbSetup(): Promise<void> {
    if (currentStorage === StorageType.JSON) {
        await setupJSON();
    } else if (currentStorage === StorageType.SQLITE) {
        await setupSQLite();
    } else {
        console.error("Unknown storage type.");
    }
}