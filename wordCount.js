import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export async function executeCountFlag(filePath) {
  try {
    // Read the contents of the file asynchronously
    const data = await readFileAsync(filePath, 'utf8');

    // Count the number of words in the file content
    const wordCount = countWords(data);

    return wordCount;
  } catch (err) {
    console.error('Error reading the file:', err);
    throw err; // Re-throw the error for the calling code to handle
  }
}


// Function to count words in a string
function countWords(text) {
  // Remove leading and trailing whitespaces and split the text into words
  const words = text.trim().split(/\s+/);

  // Filter out empty strings (caused by multiple whitespaces)
  const nonEmptyWords = words.filter(word => word !== '');

  // Return the count of non-empty words
  return nonEmptyWords.length;
}