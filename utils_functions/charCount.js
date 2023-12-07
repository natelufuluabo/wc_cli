import { getFileContent } from "./getFileContent.js";

export async function countCharacters(filePath) {
    try {
      // Count the number of characters in the content
      const charCount = (await getFileContent(filePath)).length;
  
      return charCount;
    } catch (error) {
      console.error('Error reading the file:', error);
      throw error; // Re-throw the error for the calling code to handle
    }
  }