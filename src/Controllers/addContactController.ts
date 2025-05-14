import { promptAddContact } from "../Cli/Prompts/PromptAddContact/promptAddContact";
import { promptConfirmation } from "../Cli/Confirmations/promptConfirmation";
import { saveContacts } from "../Repositories/Contact/saveContacts";

const getConfirmedContact = async (): Promise<{ name: string; phone: string; category: string } | null> => {
  const { name, phone, category } = await promptAddContact();

  const confirmed = await promptConfirmation(
    `You entered:\nName: ${name}\nPhone: ${phone}\nCategory: ${category || 'None'}\nIs this correct?`
  );

  if (!confirmed) {
    console.log("Operation cancelled.");
    return null;
  }

  return { name, phone, category: category || '' };
};

export const addContactController = async (): Promise<void> => {
  try {
    const contact = await getConfirmedContact();
    
    if (contact) {
      const { name, phone, category } = contact;
      await saveContacts(name, phone, category); 
      console.log("Contact added successfully!");
    }
  } catch (error: any) {
    console.error("An error occurred while adding the contact:", error.message);
  }
};
