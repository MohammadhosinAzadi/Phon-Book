import inquirer from "inquirer";
import { getContactByPhone } from "../../Repositories/Contact/getContactByPhone";

const promptPhoneNumber = async (): Promise<string | null> => {
  const { phone } = await inquirer.prompt([
    {
      type: "input",
      name: "phone",
      message: "Enter the phone number of the contact to edit:",
    },
  ]);
  return phone.trim() || null;
};

const promptUpdatedData = async (contact: any) => {
  const updatedData = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `Enter new name (current: ${contact.name}):`,
      default: contact.name,
    },
    {
      type: "input",
      name: "phone",
      message: `Enter new phone number (current: ${contact.phone}):`,
      default: contact.phone.toString(),
    },
    {
      type: "input",
      name: "category",
      message: `Enter new category (current: ${contact.category || "None"}):`,
      default: contact.category || "",
    },
  ]);

  return updatedData;
};

export const promptEditContact = async (): Promise<{ phone: string; updatedData: any } | null> => {
  const phone = await promptPhoneNumber();
  if (!phone) return null;

  const contact = await getContactByPhone(phone);
  if (!contact) {
    console.log("Contact not found!");
    return null;
  }

  const updatedData = await promptUpdatedData(contact);
  return { phone, updatedData };
};
