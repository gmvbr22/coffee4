#!/usr/bin/env node

import * as fs from 'fs';

import {Command} from 'commander';
import {Coffe4} from './process';

const program = new Command();
program.option('-i, --input <type>', 'input file');
program.option('-o, --output <type>', 'output file');

async function main() {
  program.parse();

  const {input, output} = program.opts();
  if (fs.existsSync(input) && fs.statSync(input).isFile()) {
    Coffe4.exec(input, output);
  }
}

main();
