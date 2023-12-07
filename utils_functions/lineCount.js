import { getFileContent } from "./getFileContent.js";

export async function executeLineFlag(filePath) {
  try {
    const content = await getFileContent(filePath);

    // Detect line jumps based on newline characters
    return (content.match(/\n/g) || []).length;
  } catch (error) {
    console.error('Error reading the file:', error);
  }
}