export const after = (haystack: string, needle: string): string => {
  const index = haystack.indexOf(needle);

  if (index === -1) {
    return '';
  }

  return haystack.substring(index + needle.length);
}

export const afterLast = (haystack: string, needle: string): string => {
  const index = haystack.lastIndexOf(needle);

  if (index === -1 || index === haystack.length - 1) {
    // If the needle is not found in the haystack or it's the last character of the string,
    // return the entire string.
    return haystack;
  }

  // Extract the substring after the last occurrence of the needle and return it.
  return haystack.substring(index + needle.length);
}

export const ascii = (input: string): string => {
  return input
    .normalize("NFD") // Normalize Unicode string to decomposed form
    .replace(/[\u0300-\u036f]/g, ""); // Remove diacritical marks (accents)
}

export const before = (haystack: string, needle: string): string => {
  const index = haystack.indexOf(needle);

  if (index === -1) {
    // If the needle is not found in the haystack, return the entire string.
    return haystack;
  }

  // Extract the substring before the needle and return it.
  return haystack.substring(0, index);
}

export const beforeLast = (haystack: string, needle: string): string => {
  const index = haystack.lastIndexOf(needle);

  if (index === -1) {
    // If the needle is not found in the haystack, return the entire string.
    return haystack;
  }

  // Extract the substring before the last occurrence of the needle and return it.
  return haystack.substring(0, index);
}

export const between = (haystack: string, start: string, end: string): string => {
  const startIndex = haystack.indexOf(start);
  const endIndex = haystack.lastIndexOf(end);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    // If either start or end is not found, or the end appears before the start, return an empty string.
    return '';
  }

  // Extract the substring between the start and end (excluding both start and end) and return it.
  return haystack.substring(startIndex + start.length, endIndex);
}

export const betweenFirst = (haystack: string, start: string, end: string): string => {
  const startIndex = haystack.indexOf(start);

  if (startIndex === -1) {
    // If the start is not found, return an empty string.
    return '';
  }

  const endIndex = haystack.indexOf(end, startIndex + start.length);

  if (endIndex === -1) {
    // If the end is not found, return an empty string.
    return '';
  }

  // Extract the substring between the start and end (excluding both start and end) and return it.
  return haystack.substring(startIndex + start.length, endIndex);
}

export const camelCase = (inputString: string): string => {
  return inputString.replace(/_([a-z])/g, (_, match) => match.toUpperCase());
}

export const contains = (haystack: string, needles: string | string[]): boolean =>{
  if (typeof needles === 'string') {
    // Convert a single needle to an array for consistent handling.
    needles = [needles];
  }

  return needles.some(needle => haystack.includes(needle));
}

export const containsAll = (haystack: string, needles: string | string[]): boolean =>{
  if (typeof needles === 'string') {
    // Convert a single needle to an array for consistent handling.
    needles = [needles];
  }

  return needles.every(needle => haystack.includes(needle));
}

export const endsWith = (haystack: string, needles: string | string[]): boolean => {
  if (typeof needles === 'string') {
    // Convert a single needle to an array for consistent handling.
    needles = [needles];
  }

  return needles.some(needle => haystack.endsWith(needle));
}

export const finish = (inputString: string, ending: string): string => {
  return inputString.endsWith(ending) ? inputString : inputString + ending;
}

export const headline = (inputString: string): string => {
  return inputString
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space between lower and upper case letters
    .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
}

export const  is = (pattern: string, value: string): boolean => {
  const patternRegex = new RegExp('^' + pattern.split('*').join('.*') + '$');
  return patternRegex.test(value);
}

export const isJson = (input: string): boolean => {
  try {
    JSON.parse(input);
    return true;
  } catch (error) {
    return false;
  }
}

export const isUrl = (input: string): boolean => {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(input);
}

export const isUlid = (input: string): boolean  => {
  const ulidPattern = /^[0-9A-Z]{26}$/i;
  return ulidPattern.test(input);
}

export const isUuid = (input: string): boolean => {
  const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidPattern.test(input);
}

export const kebabCase=(input: string): string => {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lower and upper case letters
    .toLowerCase(); // Convert the entire string to lowercase
}

export const lcFirst = (input: string): string => {
  if (input.length === 0) {
    return input;
  }

  const firstChar = input.charAt(0).toLowerCase();
  return firstChar + input.slice(1);
}

export const limit = (input: string, maxLength: number, suffix: string = '...'): string => {
  if (input.length <= maxLength) {
    return input;
  }

  return input.substring(0, maxLength) + suffix;
}

export const lower = (input: string): string => input.toLocaleLowerCase()

export const mask = (input: string, maskChar: string, start: number, length: number = 0): string => {
  if (start >= 0) {
    const maskedPart = maskChar.repeat(length);
    return input.slice(0, start) + maskedPart + input.slice(start + length);
  } else {
    const maskedPart = maskChar.repeat(length);
    return input.slice(0, input.length + start) + maskedPart + input.slice(input.length);
  }
}

export const password = (length: number = 32): string =>{
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*_-+=`|(){}[]:;<>,.?/';
  let pass = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    pass += chars[randomIndex];
  }
  return pass;
}

export const remove = (search: string | string[], input: string, ignoreCase: boolean = false): string => {
  const flags = ignoreCase ? 'gi' : 'g';
  const regex = new RegExp(search instanceof Array ? search.join('|') : search, flags);
  return input.replace(regex, '');
}

export const replaceStr = (search: string | RegExp, replace: string, input: string, caseSensitive: boolean = true): string => {
  const flags = caseSensitive ? 'g' : 'gi';
  const regex = search instanceof RegExp ? new RegExp(search.source, flags) : new RegExp(search, flags);
  return input.replace(regex, replace);
}
export const replaceArray = (search: string, replacements: string[], input: string): string => {
  let index = 0;
  return input.replace(new RegExp(search, 'g'), () => replacements[index++]);
}

export const replaceFirst = (search: string, replace: string, input: string): string =>{
  const index = input.indexOf(search);
  if (index === -1) {
    return input; // Return the original string if the search value is not found.
  }
  return input.substring(0, index) + replace + input.substring(index + search.length);
}

export const replaceLast = (search: string, replace: string, input: string): string =>{
  const index = input.lastIndexOf(search);
  if (index === -1) {
    return input; // Return the original string if the search value is not found.
  }
  return input.substring(0, index) + replace + input.substring(index + search.length);
}

export const slugify = (input: string, separator: string = '-'): string => {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, separator);
}

export const snakeCase = (input: string, separator: string = '_'): string => {
  const snakeCase = input.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2');
  return snakeCase.toLowerCase();
}

export const  squish = (input: string): string => {
  return input.replace(/\s+/g, ' ').trim();
}

export const  start = (input: string, prefix: string): string => {
  return input.startsWith(prefix) ? input : prefix + input;
}

export const startsWith = (input: string, search: string | string[]): boolean => {
  if (Array.isArray(search)) {
    return search.some(value => input.startsWith(value));
  }
  return input.startsWith(search);
}

export const studly = (input: string): string => {
  return input
    .split(/[^a-zA-Z\d]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

export const swap = (input: string, replacements: { [key: string]: string }): string => {
  const regex = new RegExp(Object.keys(replacements).join('|'), 'gi');
  return input.replace(regex, match => replacements[match.toLowerCase()] || match);
}

export const title = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, char => char.toUpperCase());
}

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

export const upper = (input: string): string => input.toLocaleUpperCase()

export const wordCount = (input: string): number => {
  const words = input.trim().split(/\s+/).filter(word => word !== '');
  return words.length;
}