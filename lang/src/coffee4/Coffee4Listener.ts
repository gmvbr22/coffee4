// Generated from src/coffee4/Coffee4.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./Coffee4Parser";
import { PrivateTypesContext } from "./Coffee4Parser";
import { PublicTypesContext } from "./Coffee4Parser";
import { NamespaceContext } from "./Coffee4Parser";
import { CoffeeClassContext } from "./Coffee4Parser";
import { CoffeeInterfaceContext } from "./Coffee4Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `Coffee4Parser`.
 */
export interface Coffee4Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Coffee4Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `Coffee4Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `Coffee4Parser.privateTypes`.
	 * @param ctx the parse tree
	 */
	enterPrivateTypes?: (ctx: PrivateTypesContext) => void;
	/**
	 * Exit a parse tree produced by `Coffee4Parser.privateTypes`.
	 * @param ctx the parse tree
	 */
	exitPrivateTypes?: (ctx: PrivateTypesContext) => void;

	/**
	 * Enter a parse tree produced by `Coffee4Parser.publicTypes`.
	 * @param ctx the parse tree
	 */
	enterPublicTypes?: (ctx: PublicTypesContext) => void;
	/**
	 * Exit a parse tree produced by `Coffee4Parser.publicTypes`.
	 * @param ctx the parse tree
	 */
	exitPublicTypes?: (ctx: PublicTypesContext) => void;

	/**
	 * Enter a parse tree produced by `Coffee4Parser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `Coffee4Parser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `Coffee4Parser.coffeeClass`.
	 * @param ctx the parse tree
	 */
	enterCoffeeClass?: (ctx: CoffeeClassContext) => void;
	/**
	 * Exit a parse tree produced by `Coffee4Parser.coffeeClass`.
	 * @param ctx the parse tree
	 */
	exitCoffeeClass?: (ctx: CoffeeClassContext) => void;

	/**
	 * Enter a parse tree produced by `Coffee4Parser.coffeeInterface`.
	 * @param ctx the parse tree
	 */
	enterCoffeeInterface?: (ctx: CoffeeInterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `Coffee4Parser.coffeeInterface`.
	 * @param ctx the parse tree
	 */
	exitCoffeeInterface?: (ctx: CoffeeInterfaceContext) => void;
}

