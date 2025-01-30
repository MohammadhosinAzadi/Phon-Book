import { remove } from "../remove";
import inquirer from 'inquirer';

export const removeContact = async () => {
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
        remove(request.phone);
        console.log('Removed successfully');
      } else {
        console.log('Operation cancelled. You can try again.');
      }
    } catch (error: any) {
      console.error('An error occurred:', error.message);
    }
  };