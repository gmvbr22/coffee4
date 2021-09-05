import {pascalCase, snakeCase} from 'change-case';
import {Builder, StringBuilder} from '../builder';
import {ClassType} from './class';

export class MethodType implements Builder {
  public readonly visible: boolean;
  public readonly name: string;
  public readonly type: string;
  public readonly nClass: ClassType;

  constructor(visible: boolean, nClass: ClassType, name: string, type: string) {
    this.nClass = nClass;
    this.visible = visible;
    this.name = name;
    this.type = type;
  }

  public getName(): string {
    if (this.visible) {
      return pascalCase(this.name);
    }
    return snakeCase(this.name);
  }

  public build(builder: StringBuilder) {
    builder.append('func ');
    builder.append('(');
    builder.append(snakeCase('self_' + this.nClass.getName()));
    builder.append(' *');
    builder.append(this.nClass.getName());
    builder.append(') ');

    builder.append(this.getName());
    builder.append('() ');
    builder.append('{');
    builder.newline();
    builder.append('}');
    builder.newline();

    builder.newline();
  }
}
