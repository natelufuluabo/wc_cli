import { getFileContent } from "./getFileContent.js";

export async function countBytes(filePath) {
    try {
        const content = await getFileContent(filePath);

        // Count the bytes in the content
        const byteCount = Buffer.from(content, 'utf8').length;

        return byteCount;
    } catch (error) {
        console.error('Error reading the file:', error);
        throw error; // Re-throw the error for the calling code to handle
    }
}