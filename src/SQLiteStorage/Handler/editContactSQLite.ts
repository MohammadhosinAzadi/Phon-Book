import { promptEditContact } from "../../Cli/Prompts/promptEditContact";
import { editContacts } from "../../SQLiteStorage/Repositories/Contact/editContacts";

export const editContactSQLite = async (): Promise<void> => {
  try {
    const result = await promptEditContact();
    if (!result) {
      console.log("Operation cancelled or no contact selected.");
      return;
    }
    await editContacts(result.phone, result.updatedData);
    console.log("Contact updated successfully!");
  } catch (error: any) {
    console.error("Error in editing contact:", error.message);
  }
};

