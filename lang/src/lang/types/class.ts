import {pascalCase, snakeCase} from 'change-case';
import {Builder, StringBuilder} from '../builder';
import {FieldType} from './field';
import {MethodType} from './method';

export class ClassType implements Builder {
  public readonly visible: boolean;
  public readonly name: string;
  public readonly fields: FieldType[] = [];
  public readonly methods: MethodType[] = [];

  constructor(visible: boolean, name: string) {
    this.visible = visible;
    this.name = name;
  }

  public getName(): string {
    if (this.visible) {
      return pascalCase(this.name);
    }
    return snakeCase(this.name);
  }

  public build(builder: StringBuilder) {
    builder.append('type ');
    builder.append(this.getName());
    builder.append(' struct {');
    builder.newline();
    for (const item of this.fields) {
      item.build(builder, 1);
    }
    builder.append('}');
    builder.newline();
    builder.newline();
    for (const item of this.methods) {
      item.build(builder);
    }
  }
}
