import { promptAddConfirmation } from "../../Cli/Confirmations/promptAddConfirmation";
import { promptAddContact } from "../../Cli/Prompts/PromptAddContact/promptAddContact"
import { data } from "../../JsonStorage/FileManager/initJsonData"
import { dataPath } from "../../JsonStorage//FileManager/dataPath"
import { saveToJSON } from "../../JsonStorage/JsonSetup/saveToJSON";
import { dataCategory } from "../../JsonStorage/FileManager/initJsonData";
import { categoryPath } from "../../JsonStorage//FileManager/dataPath";

export async function addContactJSON(): Promise<void> {
    try {
      const newContact = await promptAddContact();
      const confirmed = await promptAddConfirmation(
        newContact.name,
        newContact.phone,
        newContact.category ?? ''
      );
      if (confirmed === false) {
        console.log("Contact not saved.");
        return;
      }
      data.push(newContact);
      if (newContact.category && dataCategory.includes(newContact.category) === false) {
        dataCategory.push(newContact.category);
        await saveToJSON(categoryPath, dataCategory);
      }
  
      await saveToJSON(dataPath, data);
      console.log("Contact saved successfully.");
    } catch (error) {
      console.error("Error while saving contact:", error);
    }
  }
  