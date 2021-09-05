// Generated from src/coffee4/Coffee4.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Coffee4Listener } from "./Coffee4Listener";
import { Coffee4Visitor } from "./Coffee4Visitor";


export class Coffee4Parser extends Parser {
	public static readonly PACKAGE = 1;
	public static readonly INTERFACE = 2;
	public static readonly CLASS = 3;
	public static readonly EXPORT = 4;
	public static readonly END_CODE = 5;
	public static readonly BLOCK_START = 6;
	public static readonly BLOCK_END = 7;
	public static readonly WS = 8;
	public static readonly NEWLINE = 9;
	public static readonly ID = 10;
	public static readonly NAME = 11;
	public static readonly RULE_program = 0;
	public static readonly RULE_privateTypes = 1;
	public static readonly RULE_publicTypes = 2;
	public static readonly RULE_namespace = 3;
	public static readonly RULE_coffeeClass = 4;
	public static readonly RULE_coffeeInterface = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "privateTypes", "publicTypes", "namespace", "coffeeClass", 
		"coffeeInterface",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'package'", "'interface'", "'class'", "'export'", "';'", "'{'", 
		"'}'", undefined, "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PACKAGE", "INTERFACE", "CLASS", "EXPORT", "END_CODE", "BLOCK_START", 
		"BLOCK_END", "WS", "NEWLINE", "ID", "NAME",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Coffee4Parser._LITERAL_NAMES, Coffee4Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Coffee4Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Coffee4.g4"; }

	// @Override
	public get ruleNames(): string[] { return Coffee4Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Coffee4Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Coffee4Parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Coffee4Parser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.namespace();
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 15;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Coffee4Parser.INTERFACE:
				case Coffee4Parser.CLASS:
					{
					this.state = 13;
					this.privateTypes();
					}
					break;
				case Coffee4Parser.EXPORT:
					{
					this.state = 14;
					this.publicTypes();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Coffee4Parser.INTERFACE) | (1 << Coffee4Parser.CLASS) | (1 << Coffee4Parser.EXPORT))) !== 0));
			this.state = 19;
			this.match(Coffee4Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public privateTypes(): PrivateTypesContext {
		let _localctx: PrivateTypesContext = new PrivateTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Coffee4Parser.RULE_privateTypes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Coffee4Parser.CLASS:
				{
				this.state = 21;
				this.coffeeClass();
				}
				break;
			case Coffee4Parser.INTERFACE:
				{
				this.state = 22;
				this.coffeeInterface();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public publicTypes(): PublicTypesContext {
		let _localctx: PublicTypesContext = new PublicTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Coffee4Parser.RULE_publicTypes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.match(Coffee4Parser.EXPORT);
			this.state = 28;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Coffee4Parser.CLASS:
				{
				this.state = 26;
				this.coffeeClass();
				}
				break;
			case Coffee4Parser.INTERFACE:
				{
				this.state = 27;
				this.coffeeInterface();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Coffee4Parser.RULE_namespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this.match(Coffee4Parser.PACKAGE);
			this.state = 31;
			this.match(Coffee4Parser.ID);
			this.state = 32;
			this.match(Coffee4Parser.END_CODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coffeeClass(): CoffeeClassContext {
		let _localctx: CoffeeClassContext = new CoffeeClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Coffee4Parser.RULE_coffeeClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(Coffee4Parser.CLASS);
			this.state = 35;
			this.match(Coffee4Parser.NAME);
			this.state = 36;
			this.match(Coffee4Parser.BLOCK_START);
			this.state = 37;
			this.match(Coffee4Parser.BLOCK_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coffeeInterface(): CoffeeInterfaceContext {
		let _localctx: CoffeeInterfaceContext = new CoffeeInterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Coffee4Parser.RULE_coffeeInterface);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(Coffee4Parser.INTERFACE);
			this.state = 40;
			this.match(Coffee4Parser.NAME);
			this.state = 41;
			this.match(Coffee4Parser.BLOCK_START);
			this.state = 42;
			this.match(Coffee4Parser.BLOCK_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r/\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x03\x02\x03\x02\x03\x02\x06\x02\x12\n\x02\r\x02\x0E\x02\x13\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x04\x03\x04\x03\x04\x05" +
		"\x04\x1F\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x02\x02" +
		"\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02,\x02\x0E" +
		"\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06\x1B\x03\x02\x02\x02\b \x03" +
		"\x02\x02\x02\n$\x03\x02\x02\x02\f)\x03\x02\x02\x02\x0E\x11\x05\b\x05\x02" +
		"\x0F\x12\x05\x04\x03\x02\x10\x12\x05\x06\x04\x02\x11\x0F\x03\x02\x02\x02" +
		"\x11\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02" +
		"\x13\x14\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x16\x07\x02\x02\x03" +
		"\x16\x03\x03\x02\x02\x02\x17\x1A\x05\n\x06\x02\x18\x1A\x05\f\x07\x02\x19" +
		"\x17\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x05\x03\x02\x02\x02\x1B" +
		"\x1E\x07\x06\x02\x02\x1C\x1F\x05\n\x06\x02\x1D\x1F\x05\f\x07\x02\x1E\x1C" +
		"\x03\x02\x02\x02\x1E\x1D\x03\x02\x02\x02\x1F\x07\x03\x02\x02\x02 !\x07" +
		"\x03\x02\x02!\"\x07\f\x02\x02\"#\x07\x07\x02\x02#\t\x03\x02\x02\x02$%" +
		"\x07\x05\x02\x02%&\x07\r\x02\x02&\'\x07\b\x02\x02\'(\x07\t\x02\x02(\v" +
		"\x03\x02\x02\x02)*\x07\x04\x02\x02*+\x07\r\x02\x02+,\x07\b\x02\x02,-\x07" +
		"\t\x02\x02-\r\x03\x02\x02\x02\x06\x11\x13\x19\x1E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Coffee4Parser.__ATN) {
			Coffee4Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Coffee4Parser._serializedATN));
		}

		return Coffee4Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public EOF(): TerminalNode { return this.getToken(Coffee4Parser.EOF, 0); }
	public privateTypes(): PrivateTypesContext[];
	public privateTypes(i: number): PrivateTypesContext;
	public privateTypes(i?: number): PrivateTypesContext | PrivateTypesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrivateTypesContext);
		} else {
			return this.getRuleContext(i, PrivateTypesContext);
		}
	}
	public publicTypes(): PublicTypesContext[];
	public publicTypes(i: number): PublicTypesContext;
	public publicTypes(i?: number): PublicTypesContext | PublicTypesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PublicTypesContext);
		} else {
			return this.getRuleContext(i, PublicTypesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_program; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrivateTypesContext extends ParserRuleContext {
	public coffeeClass(): CoffeeClassContext | undefined {
		return this.tryGetRuleContext(0, CoffeeClassContext);
	}
	public coffeeInterface(): CoffeeInterfaceContext | undefined {
		return this.tryGetRuleContext(0, CoffeeInterfaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_privateTypes; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterPrivateTypes) {
			listener.enterPrivateTypes(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitPrivateTypes) {
			listener.exitPrivateTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitPrivateTypes) {
			return visitor.visitPrivateTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PublicTypesContext extends ParserRuleContext {
	public EXPORT(): TerminalNode { return this.getToken(Coffee4Parser.EXPORT, 0); }
	public coffeeClass(): CoffeeClassContext | undefined {
		return this.tryGetRuleContext(0, CoffeeClassContext);
	}
	public coffeeInterface(): CoffeeInterfaceContext | undefined {
		return this.tryGetRuleContext(0, CoffeeInterfaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_publicTypes; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterPublicTypes) {
			listener.enterPublicTypes(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitPublicTypes) {
			listener.exitPublicTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitPublicTypes) {
			return visitor.visitPublicTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(Coffee4Parser.PACKAGE, 0); }
	public ID(): TerminalNode { return this.getToken(Coffee4Parser.ID, 0); }
	public END_CODE(): TerminalNode { return this.getToken(Coffee4Parser.END_CODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_namespace; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitNamespace) {
			listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoffeeClassContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(Coffee4Parser.CLASS, 0); }
	public NAME(): TerminalNode { return this.getToken(Coffee4Parser.NAME, 0); }
	public BLOCK_START(): TerminalNode { return this.getToken(Coffee4Parser.BLOCK_START, 0); }
	public BLOCK_END(): TerminalNode { return this.getToken(Coffee4Parser.BLOCK_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_coffeeClass; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterCoffeeClass) {
			listener.enterCoffeeClass(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitCoffeeClass) {
			listener.exitCoffeeClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitCoffeeClass) {
			return visitor.visitCoffeeClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoffeeInterfaceContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(Coffee4Parser.INTERFACE, 0); }
	public NAME(): TerminalNode { return this.getToken(Coffee4Parser.NAME, 0); }
	public BLOCK_START(): TerminalNode { return this.getToken(Coffee4Parser.BLOCK_START, 0); }
	public BLOCK_END(): TerminalNode { return this.getToken(Coffee4Parser.BLOCK_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_coffeeInterface; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterCoffeeInterface) {
			listener.enterCoffeeInterface(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitCoffeeInterface) {
			listener.exitCoffeeInterface(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitCoffeeInterface) {
			return visitor.visitCoffeeInterface(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


