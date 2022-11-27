// @ts-nocheck
// Generated from ./src/painless/antlr/painless_lexer.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class painless_lexer extends Lexer {
	public static readonly WS = 1;
	public static readonly COMMENT = 2;
	public static readonly LBRACK = 3;
	public static readonly RBRACK = 4;
	public static readonly LBRACE = 5;
	public static readonly RBRACE = 6;
	public static readonly LP = 7;
	public static readonly RP = 8;
	public static readonly DOLLAR = 9;
	public static readonly DOT = 10;
	public static readonly NSDOT = 11;
	public static readonly COMMA = 12;
	public static readonly SEMICOLON = 13;
	public static readonly IF = 14;
	public static readonly IN = 15;
	public static readonly ELSE = 16;
	public static readonly WHILE = 17;
	public static readonly DO = 18;
	public static readonly FOR = 19;
	public static readonly CONTINUE = 20;
	public static readonly BREAK = 21;
	public static readonly RETURN = 22;
	public static readonly NEW = 23;
	public static readonly TRY = 24;
	public static readonly CATCH = 25;
	public static readonly THROW = 26;
	public static readonly THIS = 27;
	public static readonly INSTANCEOF = 28;
	public static readonly BOOLNOT = 29;
	public static readonly BWNOT = 30;
	public static readonly MUL = 31;
	public static readonly DIV = 32;
	public static readonly REM = 33;
	public static readonly ADD = 34;
	public static readonly SUB = 35;
	public static readonly LSH = 36;
	public static readonly RSH = 37;
	public static readonly USH = 38;
	public static readonly LT = 39;
	public static readonly LTE = 40;
	public static readonly GT = 41;
	public static readonly GTE = 42;
	public static readonly EQ = 43;
	public static readonly EQR = 44;
	public static readonly NE = 45;
	public static readonly NER = 46;
	public static readonly BWAND = 47;
	public static readonly XOR = 48;
	public static readonly BWOR = 49;
	public static readonly BOOLAND = 50;
	public static readonly BOOLOR = 51;
	public static readonly COND = 52;
	public static readonly COLON = 53;
	public static readonly ELVIS = 54;
	public static readonly REF = 55;
	public static readonly ARROW = 56;
	public static readonly FIND = 57;
	public static readonly MATCH = 58;
	public static readonly INCR = 59;
	public static readonly DECR = 60;
	public static readonly ASSIGN = 61;
	public static readonly AADD = 62;
	public static readonly ASUB = 63;
	public static readonly AMUL = 64;
	public static readonly ADIV = 65;
	public static readonly AREM = 66;
	public static readonly AAND = 67;
	public static readonly AXOR = 68;
	public static readonly AOR = 69;
	public static readonly ALSH = 70;
	public static readonly ARSH = 71;
	public static readonly AUSH = 72;
	public static readonly OCTAL = 73;
	public static readonly HEX = 74;
	public static readonly INTEGER = 75;
	public static readonly DECIMAL = 76;
	public static readonly STRING = 77;
	public static readonly REGEX = 78;
	public static readonly TRUE = 79;
	public static readonly FALSE = 80;
	public static readonly NULL = 81;
	public static readonly PRIMITIVE = 82;
	public static readonly DEF = 83;
	public static readonly ID = 84;
	public static readonly DOTINTEGER = 85;
	public static readonly DOTID = 86;
	public static readonly AFTER_DOT = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "AFTER_DOT",
	];

	public static readonly ruleNames: string[] = [
		"WS", "COMMENT", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "LP", "RP", "DOLLAR", 
		"DOT", "NSDOT", "COMMA", "SEMICOLON", "IF", "IN", "ELSE", "WHILE", "DO", 
		"FOR", "CONTINUE", "BREAK", "RETURN", "NEW", "TRY", "CATCH", "THROW", 
		"THIS", "INSTANCEOF", "BOOLNOT", "BWNOT", "MUL", "DIV", "REM", "ADD", 
		"SUB", "LSH", "RSH", "USH", "LT", "LTE", "GT", "GTE", "EQ", "EQR", "NE", 
		"NER", "BWAND", "XOR", "BWOR", "BOOLAND", "BOOLOR", "COND", "COLON", "ELVIS", 
		"REF", "ARROW", "FIND", "MATCH", "INCR", "DECR", "ASSIGN", "AADD", "ASUB", 
		"AMUL", "ADIV", "AREM", "AAND", "AXOR", "AOR", "ALSH", "ARSH", "AUSH", 
		"OCTAL", "HEX", "INTEGER", "DECIMAL", "STRING", "REGEX", "TRUE", "FALSE", 
		"NULL", "PRIMITIVE", "DEF", "ID", "DOTINTEGER", "DOTID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'{'", "'}'", "'['", "']'", "'('", "')'", 
		"'$'", "'.'", "'?.'", "','", "';'", "'if'", "'in'", "'else'", "'while'", 
		"'do'", "'for'", "'continue'", "'break'", "'return'", "'new'", "'try'", 
		"'catch'", "'throw'", "'this'", "'instanceof'", "'!'", "'~'", "'*'", "'/'", 
		"'%'", "'+'", "'-'", "'<<'", "'>>'", "'>>>'", "'<'", "'<='", "'>'", "'>='", 
		"'=='", "'==='", "'!='", "'!=='", "'&'", "'^'", "'|'", "'&&'", "'||'", 
		"'?'", "':'", "'?:'", "'::'", "'->'", "'=~'", "'==~'", "'++'", "'--'", 
		"'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'^='", "'|='", 
		"'<<='", "'>>='", "'>>>='", undefined, undefined, undefined, undefined, 
		undefined, undefined, "'true'", "'false'", "'null'", undefined, "'def'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "COMMENT", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "LP", 
		"RP", "DOLLAR", "DOT", "NSDOT", "COMMA", "SEMICOLON", "IF", "IN", "ELSE", 
		"WHILE", "DO", "FOR", "CONTINUE", "BREAK", "RETURN", "NEW", "TRY", "CATCH", 
		"THROW", "THIS", "INSTANCEOF", "BOOLNOT", "BWNOT", "MUL", "DIV", "REM", 
		"ADD", "SUB", "LSH", "RSH", "USH", "LT", "LTE", "GT", "GTE", "EQ", "EQR", 
		"NE", "NER", "BWAND", "XOR", "BWOR", "BOOLAND", "BOOLOR", "COND", "COLON", 
		"ELVIS", "REF", "ARROW", "FIND", "MATCH", "INCR", "DECR", "ASSIGN", "AADD", 
		"ASUB", "AMUL", "ADIV", "AREM", "AAND", "AXOR", "AOR", "ALSH", "ARSH", 
		"AUSH", "OCTAL", "HEX", "INTEGER", "DECIMAL", "STRING", "REGEX", "TRUE", 
		"FALSE", "NULL", "PRIMITIVE", "DEF", "ID", "DOTINTEGER", "DOTID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(painless_lexer._LITERAL_NAMES, painless_lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return painless_lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(painless_lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "painless_lexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return painless_lexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return painless_lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return painless_lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return painless_lexer.modeNames; }

	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 31:
			return this.DIV_sempred(_localctx, predIndex);

		case 77:
			return this.REGEX_sempred(_localctx, predIndex);
		}
		return true;
	}
	private DIV_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  this.isSlashRegex() == false ;
		}
		return true;
	}
	private REGEX_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return  this.isSlashRegex() ;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02X\u027E\b\x01" +
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06" +
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f" +
		"\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04" +
		"\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04" +
		"\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04" +
		"\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04" +
		"\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*" +
		"\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x04" +
		"3\t3\x044\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04" +
		"<\t<\x04=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04" +
		"E\tE\x04F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04" +
		"N\tN\x04O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04" +
		"W\tW\x03\x02\x06\x02\xB2\n\x02\r\x02\x0E\x02\xB3\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\xBC\n\x03\f\x03\x0E\x03\xBF\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\xC6\n\x03\f\x03\x0E\x03\xC9" +
		"\v\x03\x03\x03\x03\x03\x05\x03\xCD\n\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03!\x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03" +
		"&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03*\x03" +
		"*\x03+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03" +
		"/\x03/\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x033\x033\x034\x03" +
		"4\x034\x035\x035\x036\x036\x037\x037\x037\x038\x038\x038\x039\x039\x03" +
		"9\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x03" +
		">\x03>\x03?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x03D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03" +
		"G\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x06J\u01BE" +
		"\nJ\rJ\x0EJ\u01BF\x03J\x05J\u01C3\nJ\x03K\x03K\x03K\x06K\u01C8\nK\rK\x0E" +
		"K\u01C9\x03K\x05K\u01CD\nK\x03L\x03L\x03L\x07L\u01D2\nL\fL\x0EL\u01D5" +
		"\vL\x05L\u01D7\nL\x03L\x05L\u01DA\nL\x03M\x03M\x03M\x07M\u01DF\nM\fM\x0E" +
		"M\u01E2\vM\x05M\u01E4\nM\x03M\x03M\x06M\u01E8\nM\rM\x0EM\u01E9\x05M\u01EC" +
		"\nM\x03M\x03M\x05M\u01F0\nM\x03M\x06M\u01F3\nM\rM\x0EM\u01F4\x05M\u01F7" +
		"\nM\x03M\x05M\u01FA\nM\x03N\x03N\x03N\x03N\x03N\x03N\x07N\u0202\nN\fN" +
		"\x0EN\u0205\vN\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x07N\u020E\nN\fN\x0E" +
		"N\u0211\vN\x03N\x05N\u0214\nN\x03O\x03O\x03O\x03O\x06O\u021A\nO\rO\x0E" +
		"O\u021B\x03O\x03O\x07O\u0220\nO\fO\x0EO\u0223\vO\x03O\x03O\x03P\x03P\x03" +
		"P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u025D\nS\x03T\x03" +
		"T\x03T\x03T\x03U\x03U\x07U\u0265\nU\fU\x0EU\u0268\vU\x03V\x03V\x03V\x07" +
		"V\u026D\nV\fV\x0EV\u0270\vV\x05V\u0272\nV\x03V\x03V\x03W\x03W\x07W\u0278" +
		"\nW\fW\x0EW\u027B\vW\x03W\x03W\x07\xBD\xC7\u0203\u020F\u021B\x02\x02X" +
		"\x04\x02\x03\x06\x02\x04\b\x02\x05\n\x02\x06\f\x02\x07\x0E\x02\b\x10\x02" +
		"\t\x12\x02\n\x14\x02\v\x16\x02\f\x18\x02\r\x1A\x02\x0E\x1C\x02\x0F\x1E" +
		"\x02\x10 \x02\x11\"\x02\x12$\x02\x13&\x02\x14(\x02\x15*\x02\x16,\x02\x17" +
		".\x02\x180\x02\x192\x02\x1A4\x02\x1B6\x02\x1C8\x02\x1D:\x02\x1E<\x02\x1F" +
		">\x02 @\x02!B\x02\"D\x02#F\x02$H\x02%J\x02&L\x02\'N\x02(P\x02)R\x02*T" +
		"\x02+V\x02,X\x02-Z\x02.\\\x02/^\x020`\x021b\x022d\x023f\x024h\x025j\x02" +
		"6l\x027n\x028p\x029r\x02:t\x02;v\x02<x\x02=z\x02>|\x02?~\x02@\x80\x02" +
		"A\x82\x02B\x84\x02C\x86\x02D\x88\x02E\x8A\x02F\x8C\x02G\x8E\x02H\x90\x02" +
		"I\x92\x02J\x94\x02K\x96\x02L\x98\x02M\x9A\x02N\x9C\x02O\x9E\x02P\xA0\x02" +
		"Q\xA2\x02R\xA4\x02S\xA6\x02T\xA8\x02U\xAA\x02V\xAC\x02W\xAE\x02X\x04\x02" +
		"\x03\x15\x05\x02\v\f\x0F\x0F\"\"\x04\x02\f\f\x0F\x0F\x03\x0229\x04\x02" +
		"NNnn\x04\x02ZZzz\x05\x022;CHch\x03\x023;\x03\x022;\b\x02FFHHNNffhhnn\x04" +
		"\x02GGgg\x04\x02--//\x06\x02FFHHffhh\x04\x02$$^^\x04\x02))^^\x03\x02\f" +
		"\f\x04\x02\f\f11\t\x02WWeekknouuwwzz\x05\x02C\\aac|\x06\x022;C\\aac|\x02" +
		"\u02A4\x02\x04\x03\x02\x02\x02\x02\x06\x03\x02\x02\x02\x02\b\x03\x02\x02" +
		"\x02\x02\n\x03\x02\x02\x02\x02\f\x03\x02\x02\x02\x02\x0E\x03\x02\x02\x02" +
		"\x02\x10\x03\x02\x02\x02\x02\x12\x03\x02\x02\x02\x02\x14\x03\x02\x02\x02" +
		"\x02\x16\x03\x02\x02\x02\x02\x18\x03\x02\x02\x02\x02\x1A\x03\x02\x02\x02" +
		"\x02\x1C\x03\x02\x02\x02\x02\x1E\x03\x02\x02\x02\x02 \x03\x02\x02\x02" +
		"\x02\"\x03\x02\x02\x02\x02$\x03\x02\x02\x02\x02&\x03\x02\x02\x02\x02(" +
		"\x03\x02\x02\x02\x02*\x03\x02\x02\x02\x02,\x03\x02\x02\x02\x02.\x03\x02" +
		"\x02\x02\x020\x03\x02\x02\x02\x022\x03\x02\x02\x02\x024\x03\x02\x02\x02" +
		"\x026\x03\x02\x02\x02\x028\x03\x02\x02\x02\x02:\x03\x02\x02\x02\x02<\x03" +
		"\x02\x02\x02\x02>\x03\x02\x02\x02\x02@\x03\x02\x02\x02\x02B\x03\x02\x02" +
		"\x02\x02D\x03\x02\x02\x02\x02F\x03\x02\x02\x02\x02H\x03\x02\x02\x02\x02" +
		"J\x03\x02\x02\x02\x02L\x03\x02\x02\x02\x02N\x03\x02\x02\x02\x02P\x03\x02" +
		"\x02\x02\x02R\x03\x02\x02\x02\x02T\x03\x02\x02\x02\x02V\x03\x02\x02\x02" +
		"\x02X\x03\x02\x02\x02\x02Z\x03\x02\x02\x02\x02\\\x03\x02\x02\x02\x02^" +
		"\x03\x02\x02\x02\x02`\x03\x02\x02\x02\x02b\x03\x02\x02\x02\x02d\x03\x02" +
		"\x02\x02\x02f\x03\x02\x02\x02\x02h\x03\x02\x02\x02\x02j\x03\x02\x02\x02" +
		"\x02l\x03\x02\x02\x02\x02n\x03\x02\x02\x02\x02p\x03\x02\x02\x02\x02r\x03" +
		"\x02\x02\x02\x02t\x03\x02\x02\x02\x02v\x03\x02\x02\x02\x02x\x03\x02\x02" +
		"\x02\x02z\x03\x02\x02\x02\x02|\x03\x02\x02\x02\x02~\x03\x02\x02\x02\x02" +
		"\x80\x03\x02\x02\x02\x02\x82\x03\x02\x02\x02\x02\x84\x03\x02\x02\x02\x02" +
		"\x86\x03\x02\x02\x02\x02\x88\x03\x02\x02\x02\x02\x8A\x03\x02\x02\x02\x02" +
		"\x8C\x03\x02\x02\x02\x02\x8E\x03\x02\x02\x02\x02\x90\x03\x02\x02\x02\x02" +
		"\x92\x03\x02\x02\x02\x02\x94\x03\x02\x02\x02\x02\x96\x03\x02\x02\x02\x02" +
		"\x98\x03\x02\x02\x02\x02\x9A\x03\x02\x02\x02\x02\x9C\x03\x02\x02\x02\x02" +
		"\x9E\x03\x02\x02\x02\x02\xA0\x03\x02\x02\x02\x02\xA2\x03\x02\x02\x02\x02" +
		"\xA4\x03\x02\x02\x02\x02\xA6\x03\x02\x02\x02\x02\xA8\x03\x02\x02\x02\x02" +
		"\xAA\x03\x02\x02\x02\x03\xAC\x03\x02\x02\x02\x03\xAE\x03\x02\x02\x02\x04" +
		"\xB1\x03\x02\x02\x02\x06\xCC\x03\x02\x02\x02\b\xD0\x03\x02\x02\x02\n\xD2" +
		"\x03\x02\x02\x02\f\xD4\x03\x02\x02\x02\x0E\xD6\x03\x02\x02\x02\x10\xD8" +
		"\x03\x02\x02\x02\x12\xDA\x03\x02\x02\x02\x14\xDC\x03\x02\x02\x02\x16\xDE" +
		"\x03\x02\x02\x02\x18\xE2\x03\x02\x02\x02\x1A\xE7\x03\x02\x02\x02\x1C\xE9" +
		"\x03\x02\x02\x02\x1E\xEB\x03\x02\x02\x02 \xEE\x03\x02\x02\x02\"\xF1\x03" +
		"\x02\x02\x02$\xF6\x03\x02\x02\x02&\xFC\x03\x02\x02\x02(\xFF\x03\x02\x02" +
		"\x02*\u0103\x03\x02\x02\x02,\u010C\x03\x02\x02\x02.\u0112\x03\x02\x02" +
		"\x020\u0119\x03\x02\x02\x022\u011D\x03\x02\x02\x024\u0121\x03\x02\x02" +
		"\x026\u0127\x03\x02\x02\x028\u012D\x03\x02\x02\x02:\u0132\x03\x02\x02" +
		"\x02<\u013D\x03\x02\x02\x02>\u013F\x03\x02\x02\x02@\u0141\x03\x02\x02" +
		"\x02B\u0143\x03\x02\x02\x02D\u0146\x03\x02\x02\x02F\u0148\x03\x02\x02" +
		"\x02H\u014A\x03\x02\x02\x02J\u014C\x03\x02\x02\x02L\u014F\x03\x02\x02" +
		"\x02N\u0152\x03\x02\x02\x02P\u0156\x03\x02\x02\x02R\u0158\x03\x02\x02" +
		"\x02T\u015B\x03\x02\x02\x02V\u015D\x03\x02\x02\x02X\u0160\x03\x02\x02" +
		"\x02Z\u0163\x03\x02\x02\x02\\\u0167\x03\x02\x02\x02^\u016A\x03\x02\x02" +
		"\x02`\u016E\x03\x02\x02\x02b\u0170\x03\x02\x02\x02d\u0172\x03\x02\x02" +
		"\x02f\u0174\x03\x02\x02\x02h\u0177\x03\x02\x02\x02j\u017A\x03\x02\x02" +
		"\x02l\u017C\x03\x02\x02\x02n\u017E\x03\x02\x02\x02p\u0181\x03\x02\x02" +
		"\x02r\u0184\x03\x02\x02\x02t\u0187\x03\x02\x02\x02v\u018A\x03\x02\x02" +
		"\x02x\u018E\x03\x02\x02\x02z\u0191\x03\x02\x02\x02|\u0194\x03\x02\x02" +
		"\x02~\u0196\x03\x02\x02\x02\x80\u0199\x03\x02\x02\x02\x82\u019C\x03\x02" +
		"\x02\x02\x84\u019F\x03\x02\x02\x02\x86\u01A2\x03\x02\x02\x02\x88\u01A5" +
		"\x03\x02\x02\x02\x8A\u01A8\x03\x02\x02\x02\x8C\u01AB\x03\x02\x02\x02\x8E" +
		"\u01AE\x03\x02\x02\x02\x90\u01B2\x03\x02\x02\x02\x92\u01B6\x03\x02\x02" +
		"\x02\x94\u01BB\x03\x02\x02\x02\x96\u01C4\x03\x02\x02\x02\x98\u01D6\x03" +
		"\x02\x02\x02\x9A\u01E3\x03\x02\x02\x02\x9C\u0213\x03\x02\x02\x02\x9E\u0215" +
		"\x03\x02\x02\x02\xA0\u0226\x03\x02\x02\x02\xA2\u022B\x03\x02\x02\x02\xA4" +
		"\u0231\x03\x02\x02\x02\xA6\u025C\x03\x02\x02\x02\xA8\u025E\x03\x02\x02" +
		"\x02\xAA\u0262\x03\x02\x02\x02\xAC\u0271\x03\x02\x02\x02\xAE\u0275\x03" +
		"\x02\x02\x02\xB0\xB2\t\x02\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2\xB3\x03" +
		"\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03" +
		"\x02\x02\x02\xB5\xB6\b\x02\x02\x02\xB6\x05\x03\x02\x02\x02\xB7\xB8\x07" +
		"1\x02\x02\xB8\xB9\x071\x02\x02\xB9\xBD\x03\x02\x02\x02\xBA\xBC\v\x02\x02" +
		"\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBE\x03\x02\x02" +
		"\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBD\x03\x02\x02" +
		"\x02\xC0\xCD\t\x03\x02\x02\xC1\xC2\x071\x02\x02\xC2\xC3\x07,\x02\x02\xC3" +
		"\xC7\x03\x02\x02\x02\xC4\xC6\v\x02\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6" +
		"\xC9\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8" +
		"\xCA\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCB\x07,\x02\x02\xCB" +
		"\xCD\x071\x02\x02\xCC\xB7\x03\x02\x02\x02\xCC\xC1\x03\x02\x02\x02\xCD" +
		"\xCE\x03\x02\x02\x02\xCE\xCF\b\x03\x02\x02\xCF\x07\x03\x02\x02\x02\xD0" +
		"\xD1\x07}\x02\x02\xD1\t\x03\x02\x02\x02\xD2\xD3\x07\x7F\x02\x02\xD3\v" +
		"\x03\x02\x02\x02\xD4\xD5\x07]\x02\x02\xD5\r\x03\x02\x02\x02\xD6\xD7\x07" +
		"_\x02\x02\xD7\x0F\x03\x02\x02\x02\xD8\xD9\x07*\x02\x02\xD9\x11\x03\x02" +
		"\x02\x02\xDA\xDB\x07+\x02\x02\xDB\x13\x03\x02\x02\x02\xDC\xDD\x07&\x02" +
		"\x02\xDD\x15\x03\x02\x02\x02\xDE\xDF\x070\x02\x02\xDF\xE0\x03\x02\x02" +
		"\x02\xE0\xE1\b\v\x03\x02\xE1\x17\x03\x02\x02\x02\xE2\xE3\x07A\x02\x02" +
		"\xE3\xE4\x070\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\b\f\x03\x02\xE6" +
		"\x19\x03\x02\x02\x02\xE7\xE8\x07.\x02\x02\xE8\x1B\x03\x02\x02\x02\xE9" +
		"\xEA\x07=\x02\x02\xEA\x1D\x03\x02\x02\x02\xEB\xEC\x07k\x02\x02\xEC\xED" +
		"\x07h\x02\x02\xED\x1F\x03\x02\x02\x02\xEE\xEF\x07k\x02\x02\xEF\xF0\x07" +
		"p\x02\x02\xF0!\x03\x02\x02\x02\xF1\xF2\x07g\x02\x02\xF2\xF3\x07n\x02\x02" +
		"\xF3\xF4\x07u\x02\x02\xF4\xF5\x07g\x02\x02\xF5#\x03\x02\x02\x02\xF6\xF7" +
		"\x07y\x02\x02\xF7\xF8\x07j\x02\x02\xF8\xF9\x07k\x02\x02\xF9\xFA\x07n\x02" +
		"\x02\xFA\xFB\x07g\x02\x02\xFB%\x03\x02\x02\x02\xFC\xFD\x07f\x02\x02\xFD" +
		"\xFE\x07q\x02\x02\xFE\'\x03\x02\x02\x02\xFF\u0100\x07h\x02\x02\u0100\u0101" +
		"\x07q\x02\x02\u0101\u0102\x07t\x02\x02\u0102)\x03\x02\x02\x02\u0103\u0104" +
		"\x07e\x02\x02\u0104\u0105\x07q\x02\x02\u0105\u0106\x07p\x02\x02\u0106" +
		"\u0107\x07v\x02\x02\u0107\u0108\x07k\x02\x02\u0108\u0109\x07p\x02\x02" +
		"\u0109\u010A\x07w\x02\x02\u010A\u010B\x07g\x02\x02\u010B+\x03\x02\x02" +
		"\x02\u010C\u010D\x07d\x02\x02\u010D\u010E\x07t\x02\x02\u010E\u010F\x07" +
		"g\x02\x02\u010F\u0110\x07c\x02\x02\u0110\u0111\x07m\x02\x02\u0111-\x03" +
		"\x02\x02\x02\u0112\u0113\x07t\x02\x02\u0113\u0114\x07g\x02\x02\u0114\u0115" +
		"\x07v\x02\x02\u0115\u0116\x07w\x02\x02\u0116\u0117\x07t\x02\x02\u0117" +
		"\u0118\x07p\x02\x02\u0118/\x03\x02\x02\x02\u0119\u011A\x07p\x02\x02\u011A" +
		"\u011B\x07g\x02\x02\u011B\u011C\x07y\x02\x02\u011C1\x03\x02\x02\x02\u011D" +
		"\u011E\x07v\x02\x02\u011E\u011F\x07t\x02\x02\u011F\u0120\x07{\x02\x02" +
		"\u01203\x03\x02\x02\x02\u0121\u0122\x07e\x02\x02\u0122\u0123\x07c\x02" +
		"\x02\u0123\u0124\x07v\x02\x02\u0124\u0125\x07e\x02\x02\u0125\u0126\x07" +
		"j\x02\x02\u01265\x03\x02\x02\x02\u0127\u0128\x07v\x02\x02\u0128\u0129" +
		"\x07j\x02\x02\u0129\u012A\x07t\x02\x02\u012A\u012B\x07q\x02\x02\u012B" +
		"\u012C\x07y\x02\x02\u012C7\x03\x02\x02\x02\u012D\u012E\x07v\x02\x02\u012E" +
		"\u012F\x07j\x02\x02\u012F\u0130\x07k\x02\x02\u0130\u0131\x07u\x02\x02" +
		"\u01319\x03\x02\x02\x02\u0132\u0133\x07k\x02\x02\u0133\u0134\x07p\x02" +
		"\x02\u0134\u0135\x07u\x02\x02\u0135\u0136\x07v\x02\x02\u0136\u0137\x07" +
		"c\x02\x02\u0137\u0138\x07p\x02\x02\u0138\u0139\x07e\x02\x02\u0139\u013A" +
		"\x07g\x02\x02\u013A\u013B\x07q\x02\x02\u013B\u013C\x07h\x02\x02\u013C" +
		";\x03\x02\x02\x02\u013D\u013E\x07#\x02\x02\u013E=\x03\x02\x02\x02\u013F" +
		"\u0140\x07\x80\x02\x02\u0140?\x03\x02\x02\x02\u0141\u0142\x07,\x02\x02" +
		"\u0142A\x03\x02\x02\x02\u0143\u0144\x071\x02\x02\u0144\u0145\x06!\x02" +
		"\x02\u0145C\x03\x02\x02\x02\u0146\u0147\x07\'\x02\x02\u0147E\x03\x02\x02" +
		"\x02\u0148\u0149\x07-\x02\x02\u0149G\x03\x02\x02\x02\u014A\u014B\x07/" +
		"\x02\x02\u014BI\x03\x02\x02\x02\u014C\u014D\x07>\x02\x02\u014D\u014E\x07" +
		">\x02\x02\u014EK\x03\x02\x02\x02\u014F\u0150\x07@\x02\x02\u0150\u0151" +
		"\x07@\x02\x02\u0151M\x03\x02\x02\x02\u0152\u0153\x07@\x02\x02\u0153\u0154" +
		"\x07@\x02\x02\u0154\u0155\x07@\x02\x02\u0155O\x03\x02\x02\x02\u0156\u0157" +
		"\x07>\x02\x02\u0157Q\x03\x02\x02\x02\u0158\u0159\x07>\x02\x02\u0159\u015A" +
		"\x07?\x02\x02\u015AS\x03\x02\x02\x02\u015B\u015C\x07@\x02\x02\u015CU\x03" +
		"\x02\x02\x02\u015D\u015E\x07@\x02\x02\u015E\u015F\x07?\x02\x02\u015FW" +
		"\x03\x02\x02\x02\u0160\u0161\x07?\x02\x02\u0161\u0162\x07?\x02\x02\u0162" +
		"Y\x03\x02\x02\x02\u0163\u0164\x07?\x02\x02\u0164\u0165\x07?\x02\x02\u0165" +
		"\u0166\x07?\x02\x02\u0166[\x03\x02\x02\x02\u0167\u0168\x07#\x02\x02\u0168" +
		"\u0169\x07?\x02\x02\u0169]\x03\x02\x02\x02\u016A\u016B\x07#\x02\x02\u016B" +
		"\u016C\x07?\x02\x02\u016C\u016D\x07?\x02\x02\u016D_\x03\x02\x02\x02\u016E" +
		"\u016F\x07(\x02\x02\u016Fa\x03\x02\x02\x02\u0170\u0171\x07`\x02\x02\u0171" +
		"c\x03\x02\x02\x02\u0172\u0173\x07~\x02\x02\u0173e\x03\x02\x02\x02\u0174" +
		"\u0175\x07(\x02\x02\u0175\u0176\x07(\x02\x02\u0176g\x03\x02\x02\x02\u0177" +
		"\u0178\x07~\x02\x02\u0178\u0179\x07~\x02\x02\u0179i\x03\x02\x02\x02\u017A" +
		"\u017B\x07A\x02\x02\u017Bk\x03\x02\x02\x02\u017C\u017D\x07<\x02\x02\u017D" +
		"m\x03\x02\x02\x02\u017E\u017F\x07A\x02\x02\u017F\u0180\x07<\x02\x02\u0180" +
		"o\x03\x02\x02\x02\u0181\u0182\x07<\x02\x02\u0182\u0183\x07<\x02\x02\u0183" +
		"q\x03\x02\x02\x02\u0184\u0185\x07/\x02\x02\u0185\u0186\x07@\x02\x02\u0186" +
		"s\x03\x02\x02\x02\u0187\u0188\x07?\x02\x02\u0188\u0189\x07\x80\x02\x02" +
		"\u0189u\x03\x02\x02\x02\u018A\u018B\x07?\x02\x02\u018B\u018C\x07?\x02" +
		"\x02\u018C\u018D\x07\x80\x02\x02\u018Dw\x03\x02\x02\x02\u018E\u018F\x07" +
		"-\x02\x02\u018F\u0190\x07-\x02\x02\u0190y\x03\x02\x02\x02\u0191\u0192" +
		"\x07/\x02\x02\u0192\u0193\x07/\x02\x02\u0193{\x03\x02\x02\x02\u0194\u0195" +
		"\x07?\x02\x02\u0195}\x03\x02\x02\x02\u0196\u0197\x07-\x02\x02\u0197\u0198" +
		"\x07?\x02\x02\u0198\x7F\x03\x02\x02\x02\u0199\u019A\x07/\x02\x02\u019A" +
		"\u019B\x07?\x02\x02\u019B\x81\x03\x02\x02\x02\u019C\u019D\x07,\x02\x02" +
		"\u019D\u019E\x07?\x02\x02\u019E\x83\x03\x02\x02\x02\u019F\u01A0\x071\x02" +
		"\x02\u01A0\u01A1\x07?\x02\x02\u01A1\x85\x03\x02\x02\x02\u01A2\u01A3\x07" +
		"\'\x02\x02\u01A3\u01A4\x07?\x02\x02\u01A4\x87\x03\x02\x02\x02\u01A5\u01A6" +
		"\x07(\x02\x02\u01A6\u01A7\x07?\x02\x02\u01A7\x89\x03\x02\x02\x02\u01A8" +
		"\u01A9\x07`\x02\x02\u01A9\u01AA\x07?\x02\x02\u01AA\x8B\x03\x02\x02\x02" +
		"\u01AB\u01AC\x07~\x02\x02\u01AC\u01AD\x07?\x02\x02\u01AD\x8D\x03\x02\x02" +
		"\x02\u01AE\u01AF\x07>\x02\x02\u01AF\u01B0\x07>\x02\x02\u01B0\u01B1\x07" +
		"?\x02\x02\u01B1\x8F\x03\x02\x02\x02\u01B2\u01B3\x07@\x02\x02\u01B3\u01B4" +
		"\x07@\x02\x02\u01B4\u01B5\x07?\x02\x02\u01B5\x91\x03\x02\x02\x02\u01B6" +
		"\u01B7\x07@\x02\x02\u01B7\u01B8\x07@\x02\x02\u01B8\u01B9\x07@\x02\x02" +
		"\u01B9\u01BA\x07?\x02\x02\u01BA\x93\x03\x02\x02\x02\u01BB\u01BD\x072\x02" +
		"\x02\u01BC\u01BE\t\x04\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE\u01BF" +
		"\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02" +
		"\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01C3\t\x05\x02\x02\u01C2\u01C1\x03" +
		"\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\x95\x03\x02\x02\x02\u01C4" +
		"\u01C5\x072\x02\x02\u01C5\u01C7\t\x06\x02\x02\u01C6\u01C8\t\x07\x02\x02" +
		"\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01C7\x03" +
		"\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB" +
		"\u01CD\t\x05\x02\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02" +
		"\x02\u01CD\x97\x03\x02\x02\x02\u01CE\u01D7\x072\x02\x02\u01CF\u01D3\t" +
		"\b\x02\x02\u01D0\u01D2\t\t\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2\u01D5" +
		"\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02" +
		"\u01D4\u01D7\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01CE\x03" +
		"\x02\x02\x02\u01D6\u01CF\x03\x02\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8" +
		"\u01DA\t\n\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02" +
		"\x02\u01DA\x99\x03\x02\x02\x02\u01DB\u01E4\x072\x02\x02\u01DC\u01E0\t" +
		"\b\x02\x02\u01DD\u01DF\t\t\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF\u01E2" +
		"\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02" +
		"\u01E1\u01E4\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01DB\x03" +
		"\x02\x02\x02\u01E3\u01DC\x03\x02\x02\x02\u01E4\u01EB\x03\x02\x02\x02\u01E5" +
		"\u01E7\x05\x16\v\x02\u01E6\u01E8\t\t\x02\x02\u01E7\u01E6\x03\x02\x02\x02" +
		"\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03" +
		"\x02\x02\x02\u01EA\u01EC\x03\x02\x02\x02\u01EB\u01E5\x03\x02\x02\x02\u01EB" +
		"\u01EC\x03\x02\x02\x02\u01EC\u01F6\x03\x02\x02\x02\u01ED\u01EF\t\v\x02" +
		"\x02\u01EE\u01F0\t\f\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03" +
		"\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01F3\t\t\x02\x02\u01F2" +
		"\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F2\x03\x02" +
		"\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6" +
		"\u01ED\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9\x03\x02" +
		"\x02\x02\u01F8\u01FA\t\r\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01F9\u01FA" +
		"\x03\x02\x02\x02\u01FA\x9B\x03\x02\x02\x02\u01FB\u0203\x07$\x02\x02\u01FC" +
		"\u01FD\x07^\x02\x02\u01FD\u0202\x07$\x02\x02\u01FE\u01FF\x07^\x02\x02" +
		"\u01FF\u0202\x07^\x02\x02\u0200\u0202\n\x0E\x02\x02\u0201\u01FC\x03\x02" +
		"\x02\x02\u0201\u01FE\x03\x02\x02\x02\u0201\u0200\x03\x02\x02\x02\u0202" +
		"\u0205\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0203\u0201\x03\x02" +
		"\x02\x02\u0204\u0206\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206" +
		"\u0214\x07$\x02\x02\u0207\u020F\x07)\x02\x02\u0208\u0209\x07^\x02\x02" +
		"\u0209\u020E\x07)\x02\x02\u020A\u020B\x07^\x02\x02\u020B\u020E\x07^\x02" +
		"\x02\u020C\u020E\n\x0F\x02\x02\u020D\u0208";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u020D\u020A\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02" +
		"\u020E\u0211\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u020F\u020D\x03" +
		"\x02\x02\x02\u0210\u0212\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0212" +
		"\u0214\x07)\x02\x02\u0213\u01FB\x03\x02\x02\x02\u0213\u0207\x03\x02\x02" +
		"\x02\u0214\x9D\x03\x02\x02\x02\u0215\u0219\x071\x02\x02\u0216\u0217\x07" +
		"^\x02\x02\u0217\u021A\n\x10\x02\x02\u0218\u021A\n\x11\x02\x02\u0219\u0216" +
		"\x03\x02\x02\x02\u0219\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02" +
		"\u021B\u021C\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021D\x03" +
		"\x02\x02\x02\u021D\u0221\x071\x02\x02\u021E\u0220\t\x12\x02\x02\u021F" +
		"\u021E\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02" +
		"\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0224\x03\x02\x02\x02\u0223" +
		"\u0221\x03\x02\x02\x02\u0224\u0225\x06O\x03\x02\u0225\x9F\x03\x02\x02" +
		"\x02\u0226\u0227\x07v\x02\x02\u0227\u0228\x07t\x02\x02\u0228\u0229\x07" +
		"w\x02\x02\u0229\u022A\x07g\x02\x02\u022A\xA1\x03\x02\x02\x02\u022B\u022C" +
		"\x07h\x02\x02\u022C\u022D\x07c\x02\x02\u022D\u022E\x07n\x02\x02\u022E" +
		"\u022F\x07u\x02\x02\u022F\u0230\x07g\x02\x02\u0230\xA3\x03\x02\x02\x02" +
		"\u0231\u0232\x07p\x02\x02\u0232\u0233\x07w\x02\x02\u0233\u0234\x07n\x02" +
		"\x02\u0234\u0235\x07n\x02\x02\u0235\xA5\x03\x02\x02\x02\u0236\u0237\x07" +
		"d\x02\x02\u0237\u0238\x07q\x02\x02\u0238\u0239\x07q\x02\x02\u0239\u023A" +
		"\x07n\x02\x02\u023A\u023B\x07g\x02\x02\u023B\u023C\x07c\x02\x02\u023C" +
		"\u025D\x07p\x02\x02\u023D\u023E\x07d\x02\x02\u023E\u023F\x07{\x02\x02" +
		"\u023F\u0240\x07v\x02\x02\u0240\u025D\x07g\x02\x02\u0241\u0242\x07u\x02" +
		"\x02\u0242\u0243\x07j\x02\x02\u0243\u0244\x07q\x02\x02\u0244\u0245\x07" +
		"t\x02\x02\u0245\u025D\x07v\x02\x02\u0246\u0247\x07e\x02\x02\u0247\u0248" +
		"\x07j\x02\x02\u0248\u0249\x07c\x02\x02\u0249\u025D\x07t\x02\x02\u024A" +
		"\u024B\x07k\x02\x02\u024B\u024C\x07p\x02\x02\u024C\u025D\x07v\x02\x02" +
		"\u024D\u024E\x07n\x02\x02\u024E\u024F\x07q\x02\x02\u024F\u0250\x07p\x02" +
		"\x02\u0250\u025D\x07i\x02\x02\u0251\u0252\x07h\x02\x02\u0252\u0253\x07" +
		"n\x02\x02\u0253\u0254\x07q\x02\x02\u0254\u0255\x07c\x02\x02\u0255\u025D" +
		"\x07v\x02\x02\u0256\u0257\x07f\x02\x02\u0257\u0258\x07q\x02\x02\u0258" +
		"\u0259\x07w\x02\x02\u0259\u025A\x07d\x02\x02\u025A\u025B\x07n\x02\x02" +
		"\u025B\u025D\x07g\x02\x02\u025C\u0236\x03\x02\x02\x02\u025C\u023D\x03" +
		"\x02\x02\x02\u025C\u0241\x03\x02\x02\x02\u025C\u0246\x03\x02\x02\x02\u025C" +
		"\u024A\x03\x02\x02\x02\u025C\u024D\x03\x02\x02\x02\u025C\u0251\x03\x02" +
		"\x02\x02\u025C\u0256\x03\x02\x02\x02\u025D\xA7\x03\x02\x02\x02\u025E\u025F" +
		"\x07f\x02\x02\u025F\u0260\x07g\x02\x02\u0260\u0261\x07h\x02\x02\u0261" +
		"\xA9\x03\x02\x02\x02\u0262\u0266\t\x13\x02\x02\u0263\u0265\t\x14\x02\x02" +
		"\u0264\u0263\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264\x03" +
		"\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\xAB\x03\x02\x02\x02\u0268" +
		"\u0266\x03\x02\x02\x02\u0269\u0272\x072\x02\x02\u026A\u026E\t\b\x02\x02" +
		"\u026B\u026D\t\t\x02\x02\u026C\u026B\x03\x02\x02\x02\u026D\u0270\x03\x02" +
		"\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F" +
		"\u0272\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0269\x03\x02" +
		"\x02\x02\u0271\u026A\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273" +
		"\u0274\bV\x04\x02\u0274\xAD\x03\x02\x02\x02\u0275\u0279\t\x13\x02\x02" +
		"\u0276\u0278\t\x14\x02\x02\u0277\u0276\x03\x02\x02\x02\u0278\u027B\x03" +
		"\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
		"\u027C\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C\u027D\bW\x04" +
		"\x02\u027D\xAF\x03\x02\x02\x02$\x02\x03\xB3\xBD\xC7\xCC\u01BF\u01C2\u01C9" +
		"\u01CC\u01D3\u01D6\u01D9\u01E0\u01E3\u01E9\u01EB\u01EF\u01F4\u01F6\u01F9" +
		"\u0201\u0203\u020D\u020F\u0213\u0219\u021B\u0221\u025C\u0266\u026E\u0271" +
		"\u0279\x05\b\x02\x02\x04\x03\x02\x04\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			painless_lexer._serializedATNSegment0,
			painless_lexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!painless_lexer.__ATN) {
			painless_lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(painless_lexer._serializedATN));
		}

		return painless_lexer.__ATN;
	}

}

