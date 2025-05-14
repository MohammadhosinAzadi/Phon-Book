import { mainMenu } from "./Cli/Prompts/ActionMenu/mainMenu"
import { viewContactsController } from './Controllers/viewContactsController'

export function app() : void {

  mainMenu().then(async () => {
    await viewContactsController();
  }).catch((error : any) => {
    console.log('an error occorred:', error.message);
  }) 

}