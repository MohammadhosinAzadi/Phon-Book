import inquirer from 'inquirer';
import { validatePhone } from '../../../../Validation/UI-Validation/validatePhone';

export const promptRemoveContact = async (): Promise<string> => {
  let phone : string; 
  while (true) {
    try {
      const request = await inquirer.prompt([
        {
          type: 'input',
          name: 'phone',
          message: 'Enter the phone number of the contact to remove:',
        },
      ]);
      phone = await validatePhone(request.phone);
      break
    } catch (error: any) {
      console.log(error.message || 'Invalid input. Please try again.');
    }
  }
  return phone; 
};

