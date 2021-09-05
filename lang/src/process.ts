import * as fs from 'fs';

import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {Coffee4Lexer} from './coffee4/Coffee4Lexer';
import {Coffee4Parser} from './coffee4/Coffee4Parser';
import {Visitor} from './lang/visitor';
import {StringBuilder} from './lang/builder';

export class Coffe4 {
  static exec(file: string, output: string) {
    const content = fs.readFileSync(file).toString('utf-8');
    const input = CharStreams.fromString(content);
    const lexer = new Coffee4Lexer(input);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Coffee4Parser(tokenStream);
    const visitor = new Visitor();
    const stringBuilder = new StringBuilder();
    visitor.visit(parser.program()).build(stringBuilder, 0);
    fs.writeFileSync(output, stringBuilder.toString());
  }
}
