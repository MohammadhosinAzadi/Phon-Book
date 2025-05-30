import { mainMenu } from '../../Cli/Prompts/ActionMenu/mainMenu';
import { promptAnotherConfirmation } from '../../Cli/Confirmations/promptAnotherConfirmation'

const handleAnotherRequest = async (confirm: boolean): Promise<void> => {
    if (confirm) {
        await mainMenu();
    } else {
        console.log('Goodbye!');
        process.exit(0);
    }
};

export const promptAnotherRequest = async (): Promise<void> => {
    try {
        const confirm = await promptAnotherConfirmation();
        await handleAnotherRequest(confirm);
    } catch (error: any) {
        console.error('An error occurred:', error.message);
    }
};
