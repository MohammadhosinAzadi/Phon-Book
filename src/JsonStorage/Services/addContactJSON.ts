import { promptAddConfirmation } from "Cli/Confirmations/promptAddConfirmation";
import { promptAddContact } from "Cli/Prompts/PromptAddContact/promptAddContact"
import { data } from "JsonStorage/FileManager/initJsonData"

export async function addContactJSON(): Promise<void> {
   try {
    const newContact = await promptAddContact();
    const confirmed = await promptAddConfirmation(
        newContact.name,
        newContact.phone,
        newContact.category
    )
    if (confirmed === false) {
        console.log("Contact not saved.");
        return;
    }
    data.push(newContact)
    } catch (error) {
    
   } 
}