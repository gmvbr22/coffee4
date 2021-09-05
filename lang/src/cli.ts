#!/usr/bin/env node

import * as fs from 'fs';

import {Command} from 'commander';
import {Coffe4} from './process';

const program = new Command();
program.option('-f, --file <type>', 'input file');

async function main() {
  program.parse();

  const {file} = program.opts();
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    Coffe4.exec(file);
  }
}

main();
