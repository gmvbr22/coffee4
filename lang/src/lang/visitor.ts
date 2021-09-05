import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {ProgramContext} from '../coffee4/Coffee4Parser';
import {Coffee4Visitor} from '../coffee4/Coffee4Visitor';
import {Builder, defaultBuilder} from './builder';
import {LangBuilder} from './lang';

export class Visitor
  extends AbstractParseTreeVisitor<Builder>
  implements Coffee4Visitor<Builder>
{
  protected defaultResult(): Builder {
    return defaultBuilder;
  }

  public visitProgram(node: ProgramContext): Builder {
    return LangBuilder.parseProgram(node);
  }
}
