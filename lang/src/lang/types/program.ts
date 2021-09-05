import {Builder, StringBuilder} from '../builder';

export class ProgramType implements Builder {
  public readonly packageName: string;
  public readonly content: Builder[] = [];

  constructor(name: string, content: Builder[]) {
    this.packageName = name;
    this.content = content;
  }

  public build(builder: StringBuilder) {
    builder.append('package ');
    builder.append(this.packageName);
    builder.newline();
    builder.newline();

    for (const item of this.content) {
      item.build(builder, 0);
    }
  }
}
