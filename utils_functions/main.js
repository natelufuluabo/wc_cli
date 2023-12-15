import { getFileContent } from './getFileContent.js';
import { countWords } from './wordCount.js';
import { countLine } from './lineCount.js';
import { countBytes } from './bytesCount.js';
import { countCharacters } from './charCount.js';

export async function executeCommand(options, fileName) {
    const text = await getFileContent(fileName);

    if (options.count_words) {
        console.log(countWords(text));
    } else if (options.count_bytes) {
        console.log(countBytes(text));
    } else if (options.count_lines) {
        console.log(countLine(text));
    } else if (options.count_characters) {
        console.log(countCharacters(text));
    } else {
        console.log(
            countLine(text), 
            countWords(text),
            countBytes(text),
        )
    }
}