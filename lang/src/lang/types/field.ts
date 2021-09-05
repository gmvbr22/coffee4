import {pascalCase, snakeCase} from 'change-case';
import {Builder, StringBuilder} from '../builder';

export class FieldType implements Builder {
  public readonly visible: boolean;
  public readonly name: string;
  public readonly type: string;

  constructor(visible: boolean, name: string, type: string) {
    this.visible = visible;
    this.name = name;
    this.type = type;
  }

  public build(builder: StringBuilder, tab: number) {
    builder.tab(tab);
    if (this.visible) {
      builder.append(pascalCase(this.name));
    } else {
      builder.append(snakeCase(this.name));
    }
    builder.append(' ');
    switch (this.type) {
      case 'String':
        builder.append('string');
        break;
      case 'Int':
        builder.append('int');
        break;
      case 'Bool':
        builder.append('bool');
        break;
    }
    builder.newline();
  }
}
