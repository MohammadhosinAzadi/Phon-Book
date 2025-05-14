import { promptAddPhone } from './promptAddPhone'; 
import { promptAddName } from './promptAddName'; 
import { promptAddCategory } from './promptAddCategory'; 

export const promptAddContact = async (): Promise<{
  name: string;
  phone: string;
  category: string;
}> => {
  const phone = await promptAddPhone(); 
  const name = await promptAddName();
  const category = await promptAddCategory(); 

  return { name, phone, category };
};
