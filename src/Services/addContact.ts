import inquirer from 'inquirer';
import { addPhone } from './AddContact/addPhone'; 
import { addName } from './AddContact/addName'; 
import { addCategory } from './AddContact/addCategory'; 
import { add } from "../add"; 

export const addContact = async () => {
  while (true) {  
    try {
      const phone = await addPhone(); 
      const name = await addName();
      const category = await addCategory(); 

      const finalCategory = category === null ? undefined : category;
      
      const confirm = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: `You entered:\nName: ${name}\nPhone: ${phone}\nCategory: ${finalCategory || 'None'}\nIs this correct?`,
        }
      ]);

      if (confirm.confirm) {
        add(name, phone, finalCategory);
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
