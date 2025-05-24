import { promptRemoveConfirmation } from "Cli/Confirmations/promptRemoveConfirmation";
import { promptRemoveContact } from "Cli/Prompts/promptRemoveContact";
import { data } from "JsonStorage/FileManager/initJsonData";

export async function removeContactJSON(): Promise<void> {
    try {
        const phoneToRemove = await promptRemoveContact();
        const confirmed = await promptRemoveConfirmation(phoneToRemove);
        if (confirmed === false) {
            console.log("Operation cancelled.");
            return;
        }
        const contactIndex = data.findIndex(contact => contact.phone === phoneToRemove);
        if (contactIndex === -1) {
            console.log("No contact found with this phone number.");
            return;
        }
        data.splice(contactIndex, 1); 
    } catch (error : any) {
        console.error("An error occurred while removing the contact:", error.message);
    }
}