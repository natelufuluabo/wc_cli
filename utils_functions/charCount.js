import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export async function countCharacters(filePath) {
    try {
      // Read the contents of the file asynchronously
      const content = await readFileAsync(filePath, 'utf8');
  
      // Count the number of characters in the content
      const charCount = content.length;
  
      return charCount;
    } catch (error) {
      console.error('Error reading the file:', error);
      throw error; // Re-throw the error for the calling code to handle
    }
  }