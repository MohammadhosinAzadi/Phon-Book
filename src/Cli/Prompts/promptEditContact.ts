import inquirer from "inquirer";
import { getContactByPhone } from "../../SQLiteStorage/Repositories/Contact/getContactByPhone";
import { validatePhone } from "../../Validation/validatePhone";
import { validateName } from "../../Validation/validateName";

const getpromptPhoneNumber = async (): Promise<string | null> => {
  const { phone } = await inquirer.prompt([
    {
      type: "input",
      name: "phone",
      message: "Enter the phone number of the contact to edit:",
    },
  ]);
  return phone.trim() || null;
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
  const updatedData = { name, phone, category };
  return updatedData;
};

export const promptEditContact = async (): Promise<{ phone: string; updatedData: any } | null> => {
  const phone = await getpromptPhoneNumber();
  if (phone === null) return null;
  const contact = await getContactByPhone(phone);
  if (contact === null) {
    console.log("Contact not found!");
    return null;
  }
  const updatedData = await getPromptUpdatedData(contact);
  return { phone, updatedData };
};
