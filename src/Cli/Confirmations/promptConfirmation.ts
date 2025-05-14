import inquirer from "inquirer";

export const promptConfirmation = async (message: string): Promise<boolean> => {
  const { confirmed } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmed",
      message,
    },
  ]);

  return confirmed;
};
