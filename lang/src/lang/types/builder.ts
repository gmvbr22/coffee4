export interface Builder {
  build(builder: StringBuilder, tab: number): void;
}

export class StringBuilder {
  private src = '';

  public append(value: string) {
    this.src += value;
    return this;
  }

  public tab(len: number) {
    for (let i = 0; i < len; i++) {
      this.src += '  ';
    }
    return this;
  }

  public newline() {
    this.src += '\n';
    return this;
  }

  public toString() {
    return this.src;
  }
}
