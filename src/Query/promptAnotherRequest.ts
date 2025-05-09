import inquirer from "inquirer"
import { mainMenu } from './mainMenu'

export const promptAnotherRequest = async () => {

    try {
        const question = await inquirer.prompt([
            {
                type : 'confirm',
                name : 'confirm',
                message : 'Do you have any other requests?',
            }
        ]) 

        if (question.confirm) {
            await mainMenu();  

        }else {
            console.log('Goodbye!');
            process.exit(0);
        }
    } catch (error: any) {
        console.error('An error occurred:', error.message);    
    }
}