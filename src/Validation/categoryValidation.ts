export const validateCategoryName = (input: string): boolean | string => {
    return input.trim() !== "" ? true : "Category name cannot be empty";
  };
  