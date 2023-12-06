import path from 'path';
import { executeCountFlag } from './wordCount.js';
import { executeLineFlag } from './lineCount.js';

export async function executeCommand(options, fileName) {
    const absolutePath = path.resolve(fileName);

    if (options.count_words) {
        console.log(await executeCountFlag(absolutePath), fileName);
    } else if (options.count_bytes) {
        console.log('Executing count_bytes function');
        // Call the function related to count_bytes
    } else if (options.count_lines) {
        console.log(await executeLineFlag(absolutePath), fileName);
    } else {
        console.log('Executing count_bytes, count_words and count_lines functions')
    }
}