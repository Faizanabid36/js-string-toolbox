export const ucFirst = (inputString: string): string => {
  if (!inputString || inputString.length === 0) {
    // Return an empty string if the input is null, undefined, or an empty string.
    return '';
  }

  const firstChar = inputString.charAt(0);

  // Check if the first character is already uppercase.
  if (firstChar === firstChar.toUpperCase()) {
    // If it is, no need to make any changes, return the original string.
    return inputString;
  }

  // Convert the first character to uppercase and concatenate it with the rest of the string.
  return firstChar.toUpperCase() + inputString.slice(1);
};
