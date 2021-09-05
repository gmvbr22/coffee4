// Generated from src/coffee4/Coffee4.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class Coffee4Lexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"PACKAGE", "INTERFACE", "CLASS", "EXPORT", "END_CODE", "BLOCK_START", 
		"BLOCK_END", "WS", "NEWLINE", "ID", "NAME",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'package'", "'interface'", "'class'", "'export'", "';'", "'{'", 
		"'}'", undefined, "'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PACKAGE", "INTERFACE", "CLASS", "EXPORT", "END_CODE", "BLOCK_START", 
		"BLOCK_END", "WS", "NEWLINE", "ID", "NAME",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Coffee4Lexer._LITERAL_NAMES, Coffee4Lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Coffee4Lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(Coffee4Lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Coffee4.g4"; }

	// @Override
	public get ruleNames(): string[] { return Coffee4Lexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return Coffee4Lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return Coffee4Lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return Coffee4Lexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rR\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x06\t@\n\t\r\t\x0E\tA\x03\t\x03\t\x03\n\x03\n\x03\v\x06\vI\n\v\r\v\x0E" +
		"\vJ\x03\f\x03\f\x06\fO\n\f\r\f\x0E\fP\x02\x02\x02\r\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\v\x15\x02\f\x17\x02\r\x03\x02\x06\x05\x02\v\f\x0F\x0F\"\"\x03\x02c|\x03" +
		"\x02C\\\x05\x022;C\\c|\x02T\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x03\x19\x03\x02\x02\x02\x05!\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t1" +
		"\x03\x02\x02\x02\v8\x03\x02\x02\x02\r:\x03\x02\x02\x02\x0F<\x03\x02\x02" +
		"\x02\x11?\x03\x02\x02\x02\x13E\x03\x02\x02\x02\x15H\x03\x02\x02\x02\x17" +
		"L\x03\x02\x02\x02\x19\x1A\x07r\x02\x02\x1A\x1B\x07c\x02\x02\x1B\x1C\x07" +
		"e\x02\x02\x1C\x1D\x07m\x02\x02\x1D\x1E\x07c\x02\x02\x1E\x1F\x07i\x02\x02" +
		"\x1F \x07g\x02\x02 \x04\x03\x02\x02\x02!\"\x07k\x02\x02\"#\x07p\x02\x02" +
		"#$\x07v\x02\x02$%\x07g\x02\x02%&\x07t\x02\x02&\'\x07h\x02\x02\'(\x07c" +
		"\x02\x02()\x07e\x02\x02)*\x07g\x02\x02*\x06\x03\x02\x02\x02+,\x07e\x02" +
		"\x02,-\x07n\x02\x02-.\x07c\x02\x02./\x07u\x02\x02/0\x07u\x02\x020\b\x03" +
		"\x02\x02\x0212\x07g\x02\x0223\x07z\x02\x0234\x07r\x02\x0245\x07q\x02\x02" +
		"56\x07t\x02\x0267\x07v\x02\x027\n\x03\x02\x02\x0289\x07=\x02\x029\f\x03" +
		"\x02\x02\x02:;\x07}\x02\x02;\x0E\x03\x02\x02\x02<=\x07\x7F\x02\x02=\x10" +
		"\x03\x02\x02\x02>@\t\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A" +
		"?\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x03\x02\x02\x02CD\b\t\x02\x02D\x12" +
		"\x03\x02\x02\x02EF\x07\f\x02\x02F\x14\x03\x02\x02\x02GI\t\x03\x02\x02" +
		"HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"K\x16\x03\x02\x02\x02LN\t\x04\x02\x02MO\t\x05\x02\x02NM\x03\x02\x02\x02" +
		"OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02Q\x18\x03\x02\x02" +
		"\x02\x06\x02AJP\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Coffee4Lexer.__ATN) {
			Coffee4Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Coffee4Lexer._serializedATN));
		}

		return Coffee4Lexer.__ATN;
	}

}

