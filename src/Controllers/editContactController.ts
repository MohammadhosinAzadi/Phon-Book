import { promptEditContact } from "../Cli/Prompts/promptEditContact";
import { editContacts } from "../Repositories/Contact/editContacts";

const handleEditError = (error: any): string => {
  console.error("Error in editing contact:", error.message);
  return `Error in editing contact: ${error.message}`;
};

export const editContactController = async (): Promise<string | void> => {
  try {
    const result = await promptEditContact();
    if (!result) return "Operation cancelled or no contact selected.";

    const { phone, updatedData } = result;

    await editContacts(phone, updatedData);
    return "Contact updated successfully!";
    
  } catch (error: any) {
    return handleEditError(error);
  }
};
