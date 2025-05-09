import inquirer from 'inquirer';
import * as service from './index'


export function app() : void {
  mainMenu().then(async () => {
    await service.promptAnotherRequest();
  }).catch((error : any) => {
    console.log('an error occorred:', error.message);
  })  
}

export const mainMenu = async () => {
    try {
      const choice = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action:',
          choices: ['Add a new contact', 'Remove a contact', 'View contacts', 'Edit contacts', 'Edit category', 'Exit']
        }
      ]);
  
      if (choice.action === 'Add a new contact') {
        await service.promptAddContact();

      } else if (choice.action === 'Remove a contact') {
        await service.promptRemoveContact();

      } else if (choice.action === 'View contacts') {
        service.promptViewContacts();

      } else if (choice.action === 'Edit contacts') {
        const { phone } = await inquirer.prompt([
          {
              type: 'input',
              name: 'phone',
              message: 'Enter the phone number of the contact to edit:'
          }
      ]);
        await service.promptEditContact(phone);
      
      }else if (choice.action === 'Edit category'){
        await service.promptEditCategories(); 
         
      }else {
        process.exit(0)
      }

    }catch (error: any) {
      console.error('An error occurred:', error.message);
    }
};
