import {
  CoffeeClassContext,
  CoffeeInterfaceContext,
  FieldDeclarationContext,
  PrivateFieldsContext,
  PrivateTypesContext,
  ProgramContext,
  PublicFieldsContext,
  PublicTypesContext,
} from '../coffee4/Coffee4Parser';
import {Builder} from './builder';
import {ClassType} from './types/class';
import {FieldType} from './types/field';
import {InterfaceType} from './types/interface';
import {ProgramType} from './types/program';

export class LangBuilder {
  static parseProgram(node: ProgramContext): Builder {
    const name = node.namespace().PACKAGE_NAME().text;
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
    return new ClassType(isExport, node.identifier().text, [
      ...LangBuilder.publicFields(node.publicFields()),
      ...LangBuilder.privateFields(node.privateFields()),
    ]);
  }

  static publicFields(nodes: PublicFieldsContext[]): FieldType[] {
    const types: FieldType[] = [];
    if (nodes !== undefined) {
      for (const type of nodes) {
        let temp;
        if ((temp = type.fieldDeclaration()) !== undefined) {
          types.push(LangBuilder.fieldDeclaration(true, temp));
        }
      }
    }
    return types;
  }

  static privateFields(nodes: PrivateFieldsContext[]): FieldType[] {
    const types: FieldType[] = [];
    if (nodes !== undefined) {
      for (const type of nodes) {
        let temp;
        if ((temp = type.fieldDeclaration()) !== undefined) {
          types.push(LangBuilder.fieldDeclaration(true, temp));
        }
      }
    }
    return types;
  }

  static fieldDeclaration(
    isExport: boolean,
    node: FieldDeclarationContext
  ): FieldType {
    return new FieldType(
      isExport,
      node.identifier().text,
      node.primitive().text
    );
  }

  static parseInterfaceType(
    isExport: boolean,
    node: CoffeeInterfaceContext
  ): Builder {
    return new InterfaceType(isExport, node.identifier().text);
  }
}
