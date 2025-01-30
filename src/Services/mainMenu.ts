import inquirer from 'inquirer';
import { viewContacts } from './viewContacts';
import { addContact } from './addContact';
import { removeContact } from './removeContact';

export const mainMenu = async () => {
    try {
      const choice = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action:',
          choices: ['Add a new contact', 'Remove a contact', 'View contacts', 'Exit']
        }
      ]);
  
      if (choice.action === 'Add a new contact') {
        await addContact();
      } else if (choice.action === 'Remove a contact') {
        await removeContact();
      } else if (choice.action === 'View contacts') {
        viewContacts();
      } else {
        console.log('Goodbye!');
        process.exit(0);
      }
    } catch (error: any) {
      console.error('An error occurred:', error.message);
    }
  };