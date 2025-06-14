import inquirer from "inquirer";
import { validatePhone } from '../../../../Validation/UI-Validation/validatePhone';
import { validateName } from '../../../../Validation/UI-Validation/validateName';

const getPromptPhoneNumber = async (): Promise<string | null> => {
  const { phone } = await inquirer.prompt([
    {
      type: "input",
      name: "phone",
      message: "Enter the phone number of the contact to edit:",
    },
  ]);
  return phone || null;
};

export const getPromptUpdatedData = async (contact: any) => {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `Enter new name (current: ${contact.name}):`,
      default: contact.name,
    },
  ]);
  validateName(name);
  const { phone } = await inquirer.prompt([
    {
      type: "input",
      name: "phone",
      message: `Enter new phone number (current: ${contact.phone}):`,
      default: contact.phone.toString(),
    },
  ]);
  validatePhone(phone);
  const { category } = await inquirer.prompt([
    {
      type: "input",
      name: "category",
      message: `Enter new category (current: ${contact.category || "None"}):`,
      default: contact.category || "",
    },
  ]);
  return { name, phone, category };
};

export const promptEditContact = async (): Promise<string| null> => {
  const phone = await getPromptPhoneNumber();
  if (phone === null) {
    console.log("No phone number entered.");
    return null;
  }
  return phone
};


