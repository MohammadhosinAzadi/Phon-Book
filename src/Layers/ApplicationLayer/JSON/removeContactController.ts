import { promptRemoveContact } from '../../../Layers/PresentationLayer/Cli/Prompts/promptRemoveContact';
import { promptRemoveConfirmation } from '../../../Layers/PresentationLayer/Cli/Confirmations/promptRemoveConfirmation';
import { removeContact } from '../../../Layers/BusinessLogicLayer/JSON/removeContact';

export async function removeContactController() {
  try {
    const phone = await promptRemoveContact();
    const confirmed = await promptRemoveConfirmation(phone);
    if (confirmed === null) {
      console.log('Operation cancelled.');
      return;
    }
    await removeContact(phone);
    console.log('Contact removed successfully!');
  } catch (error: any) {
    console.error('Error removing contact:', error.message);
  }
}
