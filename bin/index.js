#! /usr/bin/env node 

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { executeCommand } from '../utils_functions/main.js';

const usage = "\nUsage: ccwc <flag> <file>"

const options = yargs(hideBin(process.argv))
    .usage(usage)
    .options({
        'count_bytes': {
            alias: 'c',
            describe: 'counts the number of bytes in the file',
            demandOption: false,
            type: 'boolean'
        },
        'count_lines': {
            alias: 'l',
            describe: 'counts the number of lines in the file',
            demandOption: false,
            type: 'boolean'
        },
        'count_words': {
            alias: 'w',
            describe: 'counts the number of words in the file',
            demandOption: false,
            type: 'boolean'
        },
        'count_characters': {
            alias: 'm',
            describe: 'counts the number of characters in the file',
            demandOption: false,
            type: 'boolean'
        },
    })
    .version(true)
    .help(true)
    .argv;

const executeApp = async (file) => {
    await executeCommand(options, file);
};

// Check if the stdin is coming from a pipe
if (!process.stdin.isTTY) {
    let data = '';
    process.stdin.on('data', async (chunk) => {
        const buffer = Buffer.from(chunk);
        const text = buffer.toString('utf8');
        data += text;
    });

    process.stdin.on('end', async () => {
        await executeApp(data);
    });
} else {
    if (process.argv.length === 4) {
        await executeCommand(options, process.argv[3]);
    }
    if (process.argv.length === 3) {
        await executeCommand(options, process.argv[2]);
    }
}
