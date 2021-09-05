import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {
  CoffeeClassContext,
  CoffeeInterfaceContext,
  NamespaceContext,
} from '../coffee4/Coffee4Parser';

import {Coffee4Visitor} from '../coffee4/Coffee4Visitor';

export class Visitor
  extends AbstractParseTreeVisitor<string>
  implements Coffee4Visitor<string>
{
  protected defaultResult(): string {
    return '';
  }

  public aggregateResult(aggregate: string, nextResult: string) {
    return aggregate + nextResult;
  }

  public visitCoffeClass(ctx: CoffeeClassContext): string {
    return `type ${ctx.NAME().text} struct { }\n`;
  }

  public visitCoffeInterface(ctx: CoffeeInterfaceContext): string {
    return `type ${ctx.NAME().text} interface { }\n`;
  }

  public visitNamespace(node: NamespaceContext): string {
    return 'package ' + node.ID().text + '\n';
  }
}
