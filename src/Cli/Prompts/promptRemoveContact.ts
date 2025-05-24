import inquirer from 'inquirer';
import { validatePhone } from '../../Validation/validatePhone';

export const promptRemoveContact = async (): Promise<string> => {
  while (true) {
    try {
      const { phone } = await inquirer.prompt([
        {
          type: 'input',
          name: 'phone',
          message: 'Enter the phone number of the contact to remove:',
        },
      ]);
      const trimmedPhone = phone?.trim();
      validatePhone(trimmedPhone); 
      return trimmedPhone; 

    } catch (error: any) {
      console.log(error.message || 'Invalid input. Please try again.');
    }
  }
};

