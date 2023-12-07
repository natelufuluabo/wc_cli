#! /usr/bin/env node 

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { executeCommand } from '../utils_functions/main.js';

const usage = "\nUsage: ccwc <flag> file to run the command on"

const options = yargs(hideBin(process.argv))
    .usage(usage)
    .options({
        'count_bytes': {
            alias: 'c',
            describe: 'counts the number of bytes in a the file',
            demandOption: false,
            type: 'boolean'
        },
        'count_lines': {
            alias: 'l',
            describe: 'counts the number of lines in a the file',
            demandOption: false,
            type: 'boolean'
        },
        'count_words': {
            alias: 'w',
            describe: 'counts the number of words in a the file',
            demandOption: false,
            type: 'boolean'
        },
        'count_characters': {
            alias: 'm',
            describe: 'counts the number of characters in a the file',
            demandOption: false,
            type: 'boolean'
        },
    })
    .version(true)
    .help(true)
    .argv;

if (process.argv.length === 4) await executeCommand(options, process.argv[3]);
if (process.argv.length === 3) await executeCommand(options, process.argv[2]);
