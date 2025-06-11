import { promptEditContact, getPromptUpdatedData } from "../../../MVC/View/Cli/Prompts/promptEditContact";
import { editContactJSON } from "../../../MVC/Model/ServicesJSON/editContactJSON";
import { data } from "../../../DBSetup/JSON/setupJSON";
import { Record } from "../../../Typs/record";

export async function editContactController(): Promise<void> {
  try {
    const phone = await promptEditContact();
    if (!phone) return;
    const contact = data.find((c) => c.phone === phone);
    if (!contact) {
      console.log("Contact not found.");
      return;
    }
    const updatedData = await getPromptUpdatedData(contact);
    await editContactJSON(phone, updatedData as Record);
  } catch (error: any) {
    console.error("An error occurred while editing the contact:", error.message);
  }
}
