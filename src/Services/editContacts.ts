import inquirer from "inquirer";
import { data, dataPath } from "../fileManager";
import  save  from "../FileHandlers/save";

export const editContact = async (phone: string) => {

    const contactIndex = data.findIndex(contact => contact.phone === parseInt(phone, 10));
    
    if (contactIndex === -1) {
        console.log("Contact not found!");
        return;
    }

    const contact = data[contactIndex];

    const updatedContact = await inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: `Enter new name (current: ${contact.name}):`,
            default: contact.name, 
        },
        {
            type: 'input',
            name: 'phone',
            message: `Enter new phone number (current: ${contact.phone}):`,
            default: contact.phone.toString(), 
        },
        {
            type: 'input',
            name: 'category',
            message: `Enter new category (current: ${contact.category || 'None'}):`,
            default: contact.category || '',
        }

    ]);

    data[contactIndex] = {
        ...contact,
        name: updatedContact.name,
        phone: parseInt(updatedContact.phone, 10),
        category: updatedContact.category || contact.category, 
    };

    save(dataPath, data);

    console.log("Contact updated successfully!");

}