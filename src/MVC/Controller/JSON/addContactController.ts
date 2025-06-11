import { promptAddConfirmation } from "../../../MVC/View/Cli/Confirmations/promptAddConfirmation";
import { promptAddContact } from "../../../MVC/View/Cli/Prompts/PromptAddContact";
import { addContactJSON } from "../../../MVC/Model/ServicesJSON/addContactJSON";
import { Record } from "../../../Typs/record";

export async function addContactController() {
    try {
        const contact: Record = await promptAddContact(); 
        const confirmed = await promptAddConfirmation(contact.name, contact.phone, contact.category ?? '');
        if (confirmed) {
            await addContactJSON(contact);
            console.log("Contact added successfully!");
        } else {
            console.log("Operation cancelled.");
            return
        }
    } catch (error: any) {
        console.error("An error occurred while adding the contact:", error.message)
    }
}