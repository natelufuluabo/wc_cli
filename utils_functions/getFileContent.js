import fs from 'fs/promises';

export async function getFileContent(input) {
  try {
    // Check if the input is a file path
    const isFilePath = await fs.stat(input).then((stats) => stats.isFile());

    if (isFilePath) {
      // If it's a file path, read the file and return its content
      const fileContent = await fs.readFile(input, 'utf8');
      return fileContent;
    } else {
      // If it's not a file path, assume it's content and return it
      return input;
    }
  } catch (error) {
    // Handle errors, e.g., file not found
    console.error('Error:', error.message);
    throw error;
  }
}