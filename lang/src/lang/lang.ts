import {
  CoffeeClassContext,
  CoffeeInterfaceContext,
  PrivateTypesContext,
  ProgramContext,
  PublicTypesContext,
} from '../coffee4/Coffee4Parser';
import {Builder} from './builder';
import {ClassType} from './types/class';
import {InterfaceType} from './types/interface';
import {ProgramType} from './types/program';

export class LangBuilder {
  static parseProgram(node: ProgramContext): Builder {
    const name = node.namespace().ID().text;
    return new ProgramType(name, [
      ...LangBuilder.parsePrivateTypes(node.privateTypes()),
      ...LangBuilder.parsePublicTypes(node.publicTypes()),
    ]);
  }
  static parsePublicTypes(nodes: PublicTypesContext[]): Builder[] {
    const types = [];
    if (nodes !== undefined) {
      for (const type of nodes) {
        let temp;
        if ((temp = type.coffeeClass()) !== undefined) {
          types.push(LangBuilder.parseClassType(true, temp));
        } else if ((temp = type.coffeeInterface()) !== undefined) {
          types.push(LangBuilder.parseInterfaceType(true, temp));
        }
      }
    }
    return types;
  }

  static parsePrivateTypes(nodes: PrivateTypesContext[]): Builder[] {
    const types = [];
    if (nodes !== undefined) {
      for (const type of nodes) {
        let temp;
        if ((temp = type.coffeeClass()) !== undefined) {
          types.push(LangBuilder.parseClassType(false, temp));
        } else if ((temp = type.coffeeInterface()) !== undefined) {
          types.push(LangBuilder.parseInterfaceType(false, temp));
        }
      }
    }
    return types;
  }

  static parseClassType(isExport: boolean, node: CoffeeClassContext): Builder {
    return new ClassType(isExport, node.NAME().text);
  }

  static parseInterfaceType(
    isExport: boolean,
    node: CoffeeInterfaceContext
  ): Builder {
    return new InterfaceType(isExport, node.NAME().text);
  }
}
