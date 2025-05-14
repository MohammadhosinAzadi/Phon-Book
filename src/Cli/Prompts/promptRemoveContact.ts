import inquirer from 'inquirer';

const askPhoneNumber = async (): Promise<string | null> => {
  try {
    const { phone } = await inquirer.prompt([
      {
        type: 'input',
        name: 'phone',
        message: 'Enter the phone number of the contact to remove:',
      },
    ]);
    return phone?.trim() || null;
  } catch (error: any) {
    console.error('An error occurred while getting phone number:', error.message);
    return null;
  }
};

const validatePhoneNumber = (phone: string | null): boolean => {
  if (!phone) return false;
  return true;
};

export const promptRemoveContact = async (): Promise<string | null> => {
  const phone = await askPhoneNumber();
  return validatePhoneNumber(phone) ? phone : null;
};
