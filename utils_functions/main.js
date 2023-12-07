import path from 'path';
import { executeCountFlag } from './wordCount.js';
import { executeLineFlag } from './lineCount.js';
import { countBytes } from './bytesCount.js';

export async function executeCommand(options, fileName) {
    const absolutePath = path.resolve(fileName);

    if (options.count_words) {
        console.log(await executeCountFlag(absolutePath), fileName);
    } else if (options.count_bytes) {
        console.log(await countBytes(absolutePath), fileName);
    } else if (options.count_lines) {
        console.log(await executeLineFlag(absolutePath), fileName);
    } else {
        console.log('Executing count_bytes, count_words and count_lines functions')
    }
}