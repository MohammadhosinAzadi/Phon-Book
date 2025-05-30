import { promptAddPhone } from '../../../Cli/Prompts/PromptAddContact/promptAddPhone'; 
import { promptAddName } from '../../../Cli/Prompts/PromptAddContact/promptAddName'; 
import { promptAddCategory } from '../../../Cli/Prompts/PromptAddContact/promptAddCategory'; 
import { Record } from '../../../Typs/record'

export const promptAddContact = async (): Promise<Record> => {
  const name = await promptAddName();
  const phone = await promptAddPhone(); 
  const category = await promptAddCategory(); 

  return { name, phone, category};
};
