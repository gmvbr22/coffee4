grammar Coffee4;

program
    : namespace (privateTypes|publicTypes)* EOF
    ;

namespace
    : 'package' PACKAGE_NAME ';'
    ;

privateTypes
    : ( coffeeClass | coffeeInterface)
    ;

publicTypes
    : 'public' ( coffeeClass | coffeeInterface)
    ;

coffeeInterface
    : 'interface' identifier
      '{'
      '}'
    ;

coffeeClass
    : 'class' identifier '{'
        (privateFields|publicFields)*
      '}'
    ;

privateFields
    : fieldDeclaration
    | methodDeclaration
    ;

publicFields
    : 'public' (fieldDeclaration | methodDeclaration)
    ;

fieldDeclaration
    : primitive identifier ';'
    ;

methodDeclaration
    : 'func' identifier '(' ')'
      '{'
      '}'
    ;
    
identifier
    : TYPE_NAME
    | PACKAGE_NAME
    ;

primitive
    : 'String'
    | 'Int'
    | 'Bool'
    ;
    
PACKAGE_NAME
    : [a-z]+
    ;
    
TYPE_NAME
    : [A-Za-z] [A-Za-z0-9]*
    ;

WS: [ \t\r\n]+ -> skip;
