import {pascalCase, snakeCase} from 'change-case';
import {Builder, StringBuilder} from '../builder';
import {FieldType} from './field';

export class ClassType implements Builder {
  public readonly visible: boolean;
  public readonly name: string;
  public readonly fields: FieldType[];

  constructor(visible: boolean, name: string, fields: FieldType[]) {
    this.visible = visible;
    this.name = name;
    this.fields = fields;
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
    for (const item of this.fields) {
      item.build(builder, 1);
    }
    builder.append('}');
    builder.newline();
    builder.newline();
  }
}
