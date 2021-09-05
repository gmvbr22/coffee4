import {pascalCase, snakeCase} from 'change-case';
import {Builder, StringBuilder} from '../builder';

export class ClassType implements Builder {
  public readonly visible: boolean;
  public readonly name: string;

  constructor(visible: boolean, name: string) {
    this.visible = visible;
    this.name = name;
  }

  public build(builder: StringBuilder) {
    builder.append('type ');
    if (this.visible) {
      builder.append(pascalCase(this.name));
    } else {
      builder.append(snakeCase(this.name));
    }
    builder.append(' struct {');
    builder.newline();
    builder.append('}');
    builder.newline();
    builder.newline();
  }
}
