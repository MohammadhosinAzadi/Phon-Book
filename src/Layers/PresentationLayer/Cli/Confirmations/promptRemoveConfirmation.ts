import inquirer from "inquirer";

export const promptRemoveConfirmation = async (phone: string): Promise<boolean> => {
    const { confirmed } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirmed",
        message: `Are you sure you want to delete the contact with phone: ${phone}?`
      },
    ]);
    return confirmed;
  };