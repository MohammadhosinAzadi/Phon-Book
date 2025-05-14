import inquirer from 'inquirer';
import { Action } from './actions.enum';
import { addContactController } from '../../../Controllers/addContactController';
import { removeContactController } from '../../../Controllers/removeContactController';
import { viewContactsController } from '../../../Controllers/viewContactsController';
import { editContactController } from '../../../Controllers/editContactController';
import { editCategoryController } from '../../../Controllers/editCategoryController';

export const mainMenu = async () => {
  try {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: [
          Action.AddContact,
          Action.RemoveContact,
          Action.ViewContacts,
          Action.EditContacts,
          Action.EditCategory,
          Action.Exit
        ]
      }
    ]);

    switch (action) {
      case Action.AddContact:
        await addContactController();
        break;
      case Action.RemoveContact:
        await removeContactController();
        break;
      case Action.ViewContacts:
        await viewContactsController();
        break;
      case Action.EditContacts:
        await editContactController();
        break;
      case Action.EditCategory:
        await editCategoryController();
        break;
      case Action.Exit:
        process.exit(0);
        break;
      default:
        console.log('Invalid action');
        break;
    }
  } catch (error: any) {
    console.error('An error occurred:', error.message);
  }
};
