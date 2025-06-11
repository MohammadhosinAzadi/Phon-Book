import inquirer from "inquirer";

export const promptAddConfirmation = async (name: string, phone: string, category?: string): Promise<boolean> => {
    const { confirmed } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirmed",
        message: `You entered:\nName: ${name}\nPhone: ${phone}\nCategory: ${category || 'None'}\nIs this correct?`
      },
    ]);
    return confirmed;
  };