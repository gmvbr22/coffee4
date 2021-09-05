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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly PACKAGE_NAME = 14;
	public static readonly TYPE_NAME = 15;
	public static readonly WS = 16;
	public static readonly RULE_program = 0;
	public static readonly RULE_namespace = 1;
	public static readonly RULE_privateTypes = 2;
	public static readonly RULE_publicTypes = 3;
	public static readonly RULE_coffeeInterface = 4;
	public static readonly RULE_coffeeClass = 5;
	public static readonly RULE_privateFields = 6;
	public static readonly RULE_publicFields = 7;
	public static readonly RULE_fieldDeclaration = 8;
	public static readonly RULE_methodDeclaration = 9;
	public static readonly RULE_identifier = 10;
	public static readonly RULE_primitive = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "namespace", "privateTypes", "publicTypes", "coffeeInterface", 
		"coffeeClass", "privateFields", "publicFields", "fieldDeclaration", "methodDeclaration", 
		"identifier", "primitive",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'package'", "';'", "'public'", "'interface'", "'{'", "'}'", 
		"'class'", "'func'", "'('", "')'", "'String'", "'Int'", "'Bool'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"PACKAGE_NAME", "TYPE_NAME", "WS",
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
			this.state = 24;
			this.namespace();
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Coffee4Parser.T__2) | (1 << Coffee4Parser.T__3) | (1 << Coffee4Parser.T__6))) !== 0)) {
				{
				this.state = 27;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Coffee4Parser.T__3:
				case Coffee4Parser.T__6:
					{
					this.state = 25;
					this.privateTypes();
					}
					break;
				case Coffee4Parser.T__2:
					{
					this.state = 26;
					this.publicTypes();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
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
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Coffee4Parser.RULE_namespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(Coffee4Parser.T__0);
			this.state = 35;
			this.match(Coffee4Parser.PACKAGE_NAME);
			this.state = 36;
			this.match(Coffee4Parser.T__1);
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
		this.enterRule(_localctx, 4, Coffee4Parser.RULE_privateTypes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Coffee4Parser.T__6:
				{
				this.state = 38;
				this.coffeeClass();
				}
				break;
			case Coffee4Parser.T__3:
				{
				this.state = 39;
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
		this.enterRule(_localctx, 6, Coffee4Parser.RULE_publicTypes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(Coffee4Parser.T__2);
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Coffee4Parser.T__6:
				{
				this.state = 43;
				this.coffeeClass();
				}
				break;
			case Coffee4Parser.T__3:
				{
				this.state = 44;
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
	public coffeeInterface(): CoffeeInterfaceContext {
		let _localctx: CoffeeInterfaceContext = new CoffeeInterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Coffee4Parser.RULE_coffeeInterface);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(Coffee4Parser.T__3);
			this.state = 48;
			this.identifier();
			this.state = 49;
			this.match(Coffee4Parser.T__4);
			this.state = 50;
			this.match(Coffee4Parser.T__5);
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
		this.enterRule(_localctx, 10, Coffee4Parser.RULE_coffeeClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(Coffee4Parser.T__6);
			this.state = 53;
			this.identifier();
			this.state = 54;
			this.match(Coffee4Parser.T__4);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Coffee4Parser.T__2) | (1 << Coffee4Parser.T__7) | (1 << Coffee4Parser.T__10) | (1 << Coffee4Parser.T__11) | (1 << Coffee4Parser.T__12))) !== 0)) {
				{
				this.state = 57;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Coffee4Parser.T__7:
				case Coffee4Parser.T__10:
				case Coffee4Parser.T__11:
				case Coffee4Parser.T__12:
					{
					this.state = 55;
					this.privateFields();
					}
					break;
				case Coffee4Parser.T__2:
					{
					this.state = 56;
					this.publicFields();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this.match(Coffee4Parser.T__5);
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
	public privateFields(): PrivateFieldsContext {
		let _localctx: PrivateFieldsContext = new PrivateFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Coffee4Parser.RULE_privateFields);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Coffee4Parser.T__10:
			case Coffee4Parser.T__11:
			case Coffee4Parser.T__12:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.fieldDeclaration();
				}
				break;
			case Coffee4Parser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.methodDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public publicFields(): PublicFieldsContext {
		let _localctx: PublicFieldsContext = new PublicFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Coffee4Parser.RULE_publicFields);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(Coffee4Parser.T__2);
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Coffee4Parser.T__10:
			case Coffee4Parser.T__11:
			case Coffee4Parser.T__12:
				{
				this.state = 69;
				this.fieldDeclaration();
				}
				break;
			case Coffee4Parser.T__7:
				{
				this.state = 70;
				this.methodDeclaration();
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
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Coffee4Parser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.primitive();
			this.state = 74;
			this.identifier();
			this.state = 75;
			this.match(Coffee4Parser.T__1);
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
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Coffee4Parser.RULE_methodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(Coffee4Parser.T__7);
			this.state = 78;
			this.identifier();
			this.state = 79;
			this.match(Coffee4Parser.T__8);
			this.state = 80;
			this.match(Coffee4Parser.T__9);
			this.state = 81;
			this.match(Coffee4Parser.T__4);
			this.state = 82;
			this.match(Coffee4Parser.T__5);
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Coffee4Parser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			_la = this._input.LA(1);
			if (!(_la === Coffee4Parser.PACKAGE_NAME || _la === Coffee4Parser.TYPE_NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public primitive(): PrimitiveContext {
		let _localctx: PrimitiveContext = new PrimitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Coffee4Parser.RULE_primitive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Coffee4Parser.T__10) | (1 << Coffee4Parser.T__11) | (1 << Coffee4Parser.T__12))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12[\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04+\n\x04\x03" +
		"\x05\x03\x05\x03\x05\x05\x050\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07<\n\x07\f\x07\x0E" +
		"\x07?\v\x07\x03\x07\x03\x07\x03\b\x03\b\x05\bE\n\b\x03\t\x03\t\x03\t\x05" +
		"\tJ\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02" +
		"\x04\x03\x02\x10\x11\x03\x02\r\x0F\x02V\x02\x1A\x03\x02\x02\x02\x04$\x03" +
		"\x02\x02\x02\x06*\x03\x02\x02\x02\b,\x03\x02\x02\x02\n1\x03\x02\x02\x02" +
		"\f6\x03\x02\x02\x02\x0ED\x03\x02\x02\x02\x10F\x03\x02\x02\x02\x12K\x03" +
		"\x02\x02\x02\x14O\x03\x02\x02\x02\x16V\x03\x02\x02\x02\x18X\x03\x02\x02" +
		"\x02\x1A\x1F\x05\x04\x03\x02\x1B\x1E\x05\x06\x04\x02\x1C\x1E\x05\b\x05" +
		"\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02" +
		"\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!" +
		"\x1F\x03\x02\x02\x02\"#\x07\x02\x02\x03#\x03\x03\x02\x02\x02$%\x07\x03" +
		"\x02\x02%&\x07\x10\x02\x02&\'\x07\x04\x02\x02\'\x05\x03\x02\x02\x02(+" +
		"\x05\f\x07\x02)+\x05\n\x06\x02*(\x03\x02\x02\x02*)\x03\x02\x02\x02+\x07" +
		"\x03\x02\x02\x02,/\x07\x05\x02\x02-0\x05\f\x07\x02.0\x05\n\x06\x02/-\x03" +
		"\x02\x02\x02/.\x03\x02\x02\x020\t\x03\x02\x02\x0212\x07\x06\x02\x0223" +
		"\x05\x16\f\x0234\x07\x07\x02\x0245\x07\b\x02\x025\v\x03\x02\x02\x0267" +
		"\x07\t\x02\x0278\x05\x16\f\x028=\x07\x07\x02\x029<\x05\x0E\b\x02:<\x05" +
		"\x10\t\x02;9\x03\x02\x02\x02;:\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03" +
		"\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03\x02\x02\x02@A\x07" +
		"\b\x02\x02A\r\x03\x02\x02\x02BE\x05\x12\n\x02CE\x05\x14\v\x02DB\x03\x02" +
		"\x02\x02DC\x03\x02\x02\x02E\x0F\x03\x02\x02\x02FI\x07\x05\x02\x02GJ\x05" +
		"\x12\n\x02HJ\x05\x14\v\x02IG\x03\x02\x02\x02IH\x03\x02\x02\x02J\x11\x03" +
		"\x02\x02\x02KL\x05\x18\r\x02LM\x05\x16\f\x02MN\x07\x04\x02\x02N\x13\x03" +
		"\x02\x02\x02OP\x07\n\x02\x02PQ\x05\x16\f\x02QR\x07\v\x02\x02RS\x07\f\x02" +
		"\x02ST\x07\x07\x02\x02TU\x07\b\x02\x02U\x15\x03\x02\x02\x02VW\t\x02\x02" +
		"\x02W\x17\x03\x02\x02\x02XY\t\x03\x02\x02Y\x19\x03\x02\x02\x02\n\x1D\x1F" +
		"*/;=DI";
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


export class NamespaceContext extends ParserRuleContext {
	public PACKAGE_NAME(): TerminalNode { return this.getToken(Coffee4Parser.PACKAGE_NAME, 0); }
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


export class CoffeeInterfaceContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
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


export class CoffeeClassContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public privateFields(): PrivateFieldsContext[];
	public privateFields(i: number): PrivateFieldsContext;
	public privateFields(i?: number): PrivateFieldsContext | PrivateFieldsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrivateFieldsContext);
		} else {
			return this.getRuleContext(i, PrivateFieldsContext);
		}
	}
	public publicFields(): PublicFieldsContext[];
	public publicFields(i: number): PublicFieldsContext;
	public publicFields(i?: number): PublicFieldsContext | PublicFieldsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PublicFieldsContext);
		} else {
			return this.getRuleContext(i, PublicFieldsContext);
		}
	}
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


export class PrivateFieldsContext extends ParserRuleContext {
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_privateFields; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterPrivateFields) {
			listener.enterPrivateFields(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitPrivateFields) {
			listener.exitPrivateFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitPrivateFields) {
			return visitor.visitPrivateFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PublicFieldsContext extends ParserRuleContext {
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_publicFields; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterPublicFields) {
			listener.enterPublicFields(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitPublicFields) {
			listener.exitPublicFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitPublicFields) {
			return visitor.visitPublicFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public primitive(): PrimitiveContext {
		return this.getRuleContext(0, PrimitiveContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public TYPE_NAME(): TerminalNode | undefined { return this.tryGetToken(Coffee4Parser.TYPE_NAME, 0); }
	public PACKAGE_NAME(): TerminalNode | undefined { return this.tryGetToken(Coffee4Parser.PACKAGE_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_identifier; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Coffee4Parser.RULE_primitive; }
	// @Override
	public enterRule(listener: Coffee4Listener): void {
		if (listener.enterPrimitive) {
			listener.enterPrimitive(this);
		}
	}
	// @Override
	public exitRule(listener: Coffee4Listener): void {
		if (listener.exitPrimitive) {
			listener.exitPrimitive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Coffee4Visitor<Result>): Result {
		if (visitor.visitPrimitive) {
			return visitor.visitPrimitive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


