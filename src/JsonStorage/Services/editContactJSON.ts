import { promptEditContact } from "Cli/Prompts/promptEditContact";
import { data } from "JsonStorage/FileManager/initJsonData";

export async function editContactJSON(): Promise<void> {
    try {
        const result = await promptEditContact();
        if (result === null) {
            console.log("Edit cancelled or contact not found.");
            return
        } 
        const contactIndex = data.findIndex((contact) => contact.phone === result.updatedData);
        if (contactIndex === -1) {
            console.log("No contact found with this phone number.");
            return;
        }
        data[contactIndex] = result.updatedData
        console.log("Contact updated successfully.");
    } catch (error : any) {
        console.error("Error editing contact:", error.message || error);
    }
}