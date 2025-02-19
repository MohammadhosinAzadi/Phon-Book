import inquirer from 'inquirer';
import { addPhone } from './AddContact/addPhone'; 
import { addName } from './AddContact/addName';  
import { addCategory } from './AddContact/addCategory'; 
import { add } from "../add";  

export const addContact = async () => {
    try {

        const phone = await addPhone(); 

        const name = await addName();

        const category = await addCategory(); 

        const confirm = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: `You entered:\nName: ${name}\nPhone: ${phone}\nCategory: ${category || 'None'}\nIs this correct?`,
            }
        ]);

        if (confirm.confirm) {
            add(name, phone, category);
            console.log('Contact added successfully!');
        } else {
            console.log('Operation cancelled. You can try again.');
        }
    } catch (error: any) {
        console.error('An error occurred:', error.message);
    }
};

