import inquirer from 'inquirer';
import { promptAddPhone } from './PromptAddContact/promptAddPhone'; 
import { promptAddName } from './PromptAddContact/promptAddName'; 
import { promptAddCategory } from './PromptAddContact/promptAddCategory'; 
import { saveContact } from "../Services/save"; 

export const promptAddContact = async () => {
  while (true) {  
    try {
      const phone = await promptAddPhone(); 
      const name = await promptAddName();
      const category = await promptAddCategory(); 
      
      const confirm = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: `You entered:\nName: ${name}\nPhone: ${phone}\nCategory: ${category || 'None'}\nIs this correct?`,
        }
      ]);

      if (confirm.confirm) {
        saveContact(name, phone, category);
        console.log('Contact added successfully!');
        break; 
      } else {
        console.log('Operation cancelled. Restarting the process...');
      }
      
    } catch (error: any) {
      console.error('An error occurred:', error.message);
    }
  }
};


