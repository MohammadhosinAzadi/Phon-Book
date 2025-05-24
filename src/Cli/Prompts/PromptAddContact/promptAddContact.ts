import { promptAddPhone } from './promptAddPhone'; 
import { promptAddName } from './promptAddName'; 
import { promptAddCategory } from './promptAddCategory'; 

export const promptAddContact = async (): Promise<{
  name: string;
  phone: string;
  category?: string;
}> => {
  const name = await promptAddName();
  const phone = await promptAddPhone(); 
  const category = await promptAddCategory(); 

  return { name, phone, category };
};
