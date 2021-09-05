import {
  CoffeeClassContext,
  CoffeeInterfaceContext,
  FieldDeclarationContext,
  MethodDeclarationContext,
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
import {MethodType} from './types/method';
import {ProgramType} from './types/program';

export class LangBuilder {
  static parseProgram(node: ProgramContext): Builder {
    const name = node.namespace().PACKAGE_NAME().text;
    return new ProgramType(name, [
      ...LangBuilder.fileContent(true, node.publicTypes()),
      ...LangBuilder.fileContent(false, node.privateTypes()),
    ]);
  }

  static fileContent(
    isExport: boolean,
    nodes: PublicTypesContext[] | PrivateTypesContext[]
  ): Builder[] {
    const types = [];
    if (nodes !== undefined) {
      for (const type of nodes) {
        let temp;
        if ((temp = type.coffeeClass()) !== undefined) {
          types.push(LangBuilder.parseClassType(isExport, temp));
        } else if ((temp = type.coffeeInterface()) !== undefined) {
          types.push(LangBuilder.parseInterfaceType(isExport, temp));
        }
      }
    }
    return types;
  }

  static parseClassType(isExport: boolean, node: CoffeeClassContext): Builder {
    const classT = new ClassType(isExport, node.identifier().text);

    LangBuilder.processContent(true, node.publicFields(), classT);
    LangBuilder.processContent(false, node.privateFields(), classT);

    return classT;
  }

  static processContent(
    isExport: boolean,
    nodes: PublicFieldsContext[] | PrivateFieldsContext[],
    classT: ClassType
  ) {
    if (nodes !== undefined) {
      for (const type of nodes) {
        let temp;
        if ((temp = type.fieldDeclaration()) !== undefined) {
          classT.fields.push(LangBuilder.fieldDeclaration(isExport, temp));
        }
        if ((temp = type.methodDeclaration()) !== undefined) {
          classT.methods.push(
            LangBuilder.methodDeclaration(isExport, temp, classT)
          );
        }
      }
    }
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

  static methodDeclaration(
    isExport: boolean,
    node: MethodDeclarationContext,
    classT: ClassType
  ): MethodType {
    return new MethodType(isExport, classT, node.identifier().text, 'void');
  }

  static parseInterfaceType(
    isExport: boolean,
    node: CoffeeInterfaceContext
  ): Builder {
    return new InterfaceType(isExport, node.identifier().text);
  }
}
