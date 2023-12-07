import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export async function executeLineFlag(filePath) {
  try {
    // Read the contents of the file asynchronously
    const content = await readFileAsync(filePath, 'utf8');

    // Detect line jumps based on newline characters
    return (content.match(/\n/g) || []).length;
  } catch (error) {
    console.error('Error reading the file:', error);
  }
}