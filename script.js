/*
Mi a változó? 

Mi a különbség a változó definiálás és értékadása között 
*/

//változó deklarálás -> változó létrehozása 
var valtozo;

//definiálás -> értékadás
valtozo = 5;

/*
Mi az a karakterkódolás?
    A karakterkódolás meghatározza a karakterkészletet illetve azt, hogy az egyes karakterek milyen bináris kóddal rendelkeznek 

Mik a névadási szabályok a változók esetében?
    - abécé kis és nagybetiű 
    - lehet benne szám de nem elöl
    - lehet benne alsóvonás 
    - egy pár spaciális karakter is
    - nem adhatunk lefoglalt kulcsszavakat változóknak var var = 0; ez így nem jó vagy var for = 0;
*/

/*
Milyen változótípusok vannak 
    * string
    * number
    * boolean
    * object 
        - object
        - array
        - date 
    * null 
    * undefined  
*/

var str = "A cápa ette apáca";
var bo = true;

var myVar;

console.log(typeof str); // string
console.log(typeof bo); // boolean 
console.log(typeof myVar); // undefined

// console.log(notDefined); is not defined error message

// console.log(myVar2);
// var myVar2 = 5; undefined lett 

// console.log(myVar2);
// let myVar2 = 5; let-vel pedig error message ha elöbb próbáljuk kiírni, minthogy létezett volna 

/*
Mi az az operátor?
    a szimbolum, amivel a műveletet elvégezzük 
Mi az az operandus?
    a műveletnek az alanya 
5 + 6 + 9 * 10

myStr + "-" + myStr2;
*/

/*
Értékadó operátorok
    =, +=, -=, stb..
Aritmetikai operátorok
    +,-,*,/,%,**
Összehasonlító operátorok
    <,<=,>,>=,!=, !==, ==, ===
logikai operátorok
    ||, &&, !
bit operátorok
    &, |, <<,>>
*/ 

console.log(5 == "5");
// true, mert itt csak azt hasonlítja össze, hogy a az 5 az 5 és nem a típusát, hogy az egyik number a másik meg string 
console.log(5 === "5");
//false, mert itt azt is megnézi, hogy mi a típusa string meg number nem lehet egyenlő 

console.log(5 != "5");
//false, mert ez egyenlő, mint ahogy az első példában is látszik 
console.log(5 !== "5");
//true, mert ez tényleg nem egyenlő, hiszen bármi van, akkor se egyenlő egy string meg egy number a típusaik miatt 

const a = 55;
const b = 61;

console.log(a.toString(2)); //110111
console.log(b.toString(2)); //111101
//kettes bináris rendszerben így fog kinézni 


