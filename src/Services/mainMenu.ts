import inquirer from 'inquirer';
import { viewContacts } from './viewContacts';
import { addContact } from './addContact';
import { removeContact } from './removeContact';
import { anotherRequest } from './anotherRequest';
import { editContact } from './editContacts';

export const mainMenu = async () => {
    try {
      const choice = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action:',
          choices: ['Add a new contact', 'Remove a contact', 'View contacts', 'Edit contacts', 'Exit']
        }
      ]);
  
      if (choice.action === 'Add a new contact') {
        await addContact();
      } else if (choice.action === 'Remove a contact') {
        await removeContact();
      } else if (choice.action === 'View contacts') {
        viewContacts();
      } else if (choice.action === 'Edit contacts') {
        const { phone } = await inquirer.prompt([
          {
              type: 'input',
              name: 'phone',
              message: 'Enter the phone number of the contact to edit:'
          }
      ]);
      await editContact(phone);
      }else {
        process.exit(0)
      }

      await anotherRequest();
    }catch (error: any) {
      console.error('An error occurred:', error.message);
    }
};