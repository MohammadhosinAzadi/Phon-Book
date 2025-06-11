import { mainMenu } from "../Layers/PresentationLayer/Cli/Prompts/ActionMenu/mainMenu"
import { promptAnotherRequest } from '../Layers/PresentationLayer/Cli/Prompts/promptAnotherRequest'

export function app() : void {
  mainMenu().then(async () => {
    await promptAnotherRequest();
  }).catch((error : any) => {
    console.log('an error occorred:', error.message);
  }) 
}