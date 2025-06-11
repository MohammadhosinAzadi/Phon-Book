import { promptAddPhone } from '../../../../../MVC/View/Cli/Prompts/PromptAddContact/phone'; 
import { promptAddName } from "../../../../../MVC/View/Cli/Prompts/PromptAddContact/name"; 
import { promptAddCategory } from "../../../../../MVC/View/Cli/Prompts/PromptAddContact/category"; 
import { Record } from "../../../../../Typs/record"

export const promptAddContact = async (): Promise<Record> => {
  const name = await promptAddName();
  const phone = await promptAddPhone(); 
  const category = await promptAddCategory(); 

  return { name, phone, category};
};
