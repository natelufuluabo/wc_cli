import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export async function countBytes(filePath) {
    try {
        // Read the contents of the file asynchronously
        const content = await readFileAsync(filePath);

        // Count the bytes in the content
        const byteCount = Buffer.from(content, 'utf8').length;

        return byteCount;
    } catch (error) {
        console.error('Error reading the file:', error);
        throw error; // Re-throw the error for the calling code to handle
    }
}