import inquirer from "inquirer";

export const promptAnotherConfirmation = async (): Promise<boolean> => {
    const { confirm } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Do you have any other requests?',
        }
    ]);
    return confirm;
};