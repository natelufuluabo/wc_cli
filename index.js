import path from 'path';
import { executeCommand } from './wordCount.js';

const cliArguments = process.argv[2];

// Specify the relative path to the file
const fileToUse = process.argv[3];

// Resolve the absolute path
const absolutePath = path.resolve(fileToUse);

if (cliArguments === '-c') console.log(await executeCommand(absolutePath))