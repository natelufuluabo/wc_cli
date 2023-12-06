#! /usr/bin/env node 

import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
// import { executeCommand } from '../wordCount.js';

const usage = "\nUsage: ccwc <flag> file to run the command on"

const options = yargs()
    .usage(usage)
    .option(
        "w", 
        {
            alias: "count_words", 
            describe: "counts the number of words in a the file",
            type: "boolean",
            demandOption: false
        },
    )
    .option(
        "c", 
        {
            alias: "count_byte", 
            describe: "counts the number of bytes in a the file",
            type: "boolean",
            demandOption: false
        },
    )
    .option(
        "l", 
        {
            alias: "count_lines", 
            describe: "counts the number of lines in a the file",
            type: "boolean",
            demandOption: false
        },
    )
    .help(true)
    .argv;