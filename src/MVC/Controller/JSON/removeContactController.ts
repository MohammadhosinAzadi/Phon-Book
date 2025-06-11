import { promptRemoveConfirmation } from "../../../MVC/View/Cli/Confirmations/promptRemoveConfirmation";
import { removeContactJSON } from "../../../MVC/Model/ServicesJSON/removeContactJSON";
import { promptRemoveContact } from "../../../MVC/View/Cli/Prompts/promptRemoveContact";

export async function removeContactController() {
    try {
        const phone: string = await promptRemoveContact(); 
        const confirmed = await promptRemoveConfirmation(phone);
        if (confirmed) {
            await removeContactJSON(phone);
            console.log("Contact removed successfully!");
        } else {
            console.log("Operation cancelled.");
            return
        }
    } catch (error: any) {
        console.error("An error occurred while removing the contact:", error.message)
    }
}