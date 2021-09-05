grammar Coffee4;

PACKAGE: 'package';
INTERFACE: 'interface';
CLASS: 'class';
EXPORT: 'export';
END_CODE: ';';
BLOCK_START: '{';
BLOCK_END: '}';

program: namespace ( privateTypes | publicTypes)+ EOF;

privateTypes: ( coffeeClass | coffeeInterface);
publicTypes: EXPORT ( coffeeClass | coffeeInterface);

namespace: PACKAGE ID END_CODE;

coffeeClass: CLASS NAME BLOCK_START BLOCK_END;
coffeeInterface: INTERFACE NAME BLOCK_START BLOCK_END;

WS: [ \t\r\n]+ -> skip;

NEWLINE: '\n';
ID: [a-z]+;

NAME: [A-Z][a-zA-Z0-9]+;