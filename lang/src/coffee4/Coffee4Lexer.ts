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
	public static readonly PACKAGE_NAME = 13;
	public static readonly TYPE_NAME = 14;
	public static readonly WS = 15;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "PACKAGE_NAME", "TYPE_NAME", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'package'", "';'", "'public'", "'interface'", "'{'", "'}'", 
		"'class'", "'('", "')'", "'String'", "'Int'", "'Bool'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "PACKAGE_NAME", 
		"TYPE_NAME", "WS",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x11m\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x06\x0E\\\n\x0E\r\x0E\x0E\x0E]\x03\x0F\x03" +
		"\x0F\x07\x0Fb\n\x0F\f\x0F\x0E\x0Fe\v\x0F\x03\x10\x06\x10h\n\x10\r\x10" +
		"\x0E\x10i\x03\x10\x03\x10\x02\x02\x02\x11\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11\x03\x02" +
		"\x06\x03\x02c|\x04\x02C\\c|\x05\x022;C\\c|\x05\x02\v\f\x0F\x0F\"\"\x02" +
		"o\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
		"\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
		"\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02" +
		"\x03!\x03\x02\x02\x02\x05)\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t2\x03" +
		"\x02\x02\x02\v<\x03\x02\x02\x02\r>\x03\x02\x02\x02\x0F@\x03\x02\x02\x02" +
		"\x11F\x03\x02\x02\x02\x13H\x03\x02\x02\x02\x15J\x03\x02\x02\x02\x17Q\x03" +
		"\x02\x02\x02\x19U\x03\x02\x02\x02\x1B[\x03\x02\x02\x02\x1D_\x03\x02\x02" +
		"\x02\x1Fg\x03\x02\x02\x02!\"\x07r\x02\x02\"#\x07c\x02\x02#$\x07e\x02\x02" +
		"$%\x07m\x02\x02%&\x07c\x02\x02&\'\x07i\x02\x02\'(\x07g\x02\x02(\x04\x03" +
		"\x02\x02\x02)*\x07=\x02\x02*\x06\x03\x02\x02\x02+,\x07r\x02\x02,-\x07" +
		"w\x02\x02-.\x07d\x02\x02./\x07n\x02\x02/0\x07k\x02\x0201\x07e\x02\x02" +
		"1\b\x03\x02\x02\x0223\x07k\x02\x0234\x07p\x02\x0245\x07v\x02\x0256\x07" +
		"g\x02\x0267\x07t\x02\x0278\x07h\x02\x0289\x07c\x02\x029:\x07e\x02\x02" +
		":;\x07g\x02\x02;\n\x03\x02\x02\x02<=\x07}\x02\x02=\f\x03\x02\x02\x02>" +
		"?\x07\x7F\x02\x02?\x0E\x03\x02\x02\x02@A\x07e\x02\x02AB\x07n\x02\x02B" +
		"C\x07c\x02\x02CD\x07u\x02\x02DE\x07u\x02\x02E\x10\x03\x02\x02\x02FG\x07" +
		"*\x02\x02G\x12\x03\x02\x02\x02HI\x07+\x02\x02I\x14\x03\x02\x02\x02JK\x07" +
		"U\x02\x02KL\x07v\x02\x02LM\x07t\x02\x02MN\x07k\x02\x02NO\x07p\x02\x02" +
		"OP\x07i\x02\x02P\x16\x03\x02\x02\x02QR\x07K\x02\x02RS\x07p\x02\x02ST\x07" +
		"v\x02\x02T\x18\x03\x02\x02\x02UV\x07D\x02\x02VW\x07q\x02\x02WX\x07q\x02" +
		"\x02XY\x07n\x02\x02Y\x1A\x03\x02\x02\x02Z\\\t\x02\x02\x02[Z\x03\x02\x02" +
		"\x02\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\x1C\x03\x02" +
		"\x02\x02_c\t\x03\x02\x02`b\t\x04\x02\x02a`\x03\x02\x02\x02be\x03\x02\x02" +
		"\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d\x1E\x03\x02\x02\x02ec\x03\x02" +
		"\x02\x02fh\t\x05\x02\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02" +
		"\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl\b\x10\x02\x02l \x03\x02" +
		"\x02\x02\x06\x02]ci\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Coffee4Lexer.__ATN) {
			Coffee4Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Coffee4Lexer._serializedATN));
		}

		return Coffee4Lexer.__ATN;
	}

}

