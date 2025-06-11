import { mainMenu } from "../MVC/View/Cli/Prompts/ActionMenu/mainMenu"
import { promptAnotherRequest } from '../MVC/View/Cli/Prompts/promptAnotherRequest'

export function app() : void {
  mainMenu().then(async () => {
    await promptAnotherRequest();
  }).catch((error : any) => {
    console.log('an error occorred:', error.message);
  }) 
}