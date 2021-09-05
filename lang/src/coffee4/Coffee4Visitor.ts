// Generated from src/coffee4/Coffee4.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./Coffee4Parser";
import { NamespaceContext } from "./Coffee4Parser";
import { PrivateTypesContext } from "./Coffee4Parser";
import { PublicTypesContext } from "./Coffee4Parser";
import { CoffeeInterfaceContext } from "./Coffee4Parser";
import { CoffeeClassContext } from "./Coffee4Parser";
import { PrivateFieldsContext } from "./Coffee4Parser";
import { PublicFieldsContext } from "./Coffee4Parser";
import { FieldDeclarationContext } from "./Coffee4Parser";
import { MethodDeclarationContext } from "./Coffee4Parser";
import { IdentifierContext } from "./Coffee4Parser";
import { PrimitiveContext } from "./Coffee4Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Coffee4Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Coffee4Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Coffee4Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.privateTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivateTypes?: (ctx: PrivateTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.publicTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPublicTypes?: (ctx: PublicTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.coffeeInterface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoffeeInterface?: (ctx: CoffeeInterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.coffeeClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoffeeClass?: (ctx: CoffeeClassContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.privateFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivateFields?: (ctx: PrivateFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.publicFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPublicFields?: (ctx: PublicFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Coffee4Parser.primitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitive?: (ctx: PrimitiveContext) => Result;
}

