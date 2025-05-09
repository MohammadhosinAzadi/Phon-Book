import { removeContact } from "../Services/remove";
import inquirer from 'inquirer';

export const promptRemoveContact = async (): Promise<void> => {

  while (true) { 

    try {
      const request = await inquirer.prompt([
        {
          type: 'input',
          name: 'phone',
          message: 'Enter the phone number of the contact to remove'
        }
      ]);
  
      const confirm = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: `You entered:\nPhone: ${request.phone}\nIs this correct?`,
        }
      ]);
  
      if (confirm.confirm) {
        removeContact(request.phone);
        console.log('Removed successfully');
        break;
      } else {
        console.log('Operation cancelled. You can try again.');
        return promptRemoveContact()
      }
    } catch (error: any) {
      console.error('An error occurred:', error.message);
    }

   }
};