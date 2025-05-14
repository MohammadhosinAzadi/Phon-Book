import inquirer from "inquirer";
import { mainMenu } from './ActionMenu/mainMenu';

const askForAnotherRequest = async (): Promise<boolean> => {
    const { confirm } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Do you have any other requests?',
        }
    ]);
    return confirm;
};

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
        const confirm = await askForAnotherRequest();
        await handleAnotherRequest(confirm);
    } catch (error: any) {
        console.error('An error occurred:', error.message);
    }
};
