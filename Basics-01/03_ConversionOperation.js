/*Type conversion
_________________________
Type conversion(or typecasting) means transfer of data from one data type to another.Implicit conversion happens 
when the compiler(for compiled languages) or runtime(for script languages like JavaScript) automatically converts data types.
 source code can also explicitly require a conversion to take place.*/


let score = "33";
console.log(typeof score);

// convert this string to number

let valueInNumber = Number(score);
console.log(typeof valueInNumber);


let score1 = "33a";

//convert this string to number  

let scoreNumber = Number(score1);
console.log(typeof scoreNumber);   // converted to number but value is NaN 
console.log(scoreNumber);   //on print value is NaN and NaN is already a type in javascript

let score2 = null;

// convert null to number

let nullNumber = Number(score2);
console.log(typeof nullNumber);  //converted to number but value is 0
console.log(nullNumber);


let score3 = undefined;

// convert undefined to number

let unScore3 = Number(score3);
console.log(typeof unScore3);  //converted to number but value is NaN
console.log(unScore3);


let score4 = true;

// convert score4 to number

let boolScore4 = Number(score4);
console.log(typeof boolScore4);  // converted to number but value is 1
console.log(boolScore4);


let score5 = false;

// convert score4 to number

let boolScore5 = Number(score5);
console.log(typeof boolScore5);  // converted to number but value is 0
console.log(boolScore5);


// * When any type not able to converted into number then result is NaN.


let isLoggedIn = 1;

// convert above variable to boolean

let BoolisLoggedIn = Boolean(isLoggedIn);
console.log(typeof BoolisLoggedIn);  //easily converted into boolean and value is true
console.log(BoolisLoggedIn);

let isLoggedInn = "";

// convert above variable to boolean

let BoolisLoggedInn = Boolean(isLoggedInn);
console.log(typeof BoolisLoggedInn);  //easily converted into boolean and value is false
console.log(BoolisLoggedInn);

let isLoggedInnn = "Rajnish";

// convert above variable to boolean

let BoolisLoggedInnn = Boolean(isLoggedInnn);
console.log(typeof BoolisLoggedInnn);  //easily converted into boolean and value is false
console.log(BoolisLoggedInnn);


let isLoggedIns = 0;

// convert above variable to boolean

let BoolisLoggedIns = Boolean(isLoggedIns);
console.log(typeof BoolisLoggedIns);  //easily converted into boolean and value is false
console.log(BoolisLoggedIns);

let someNumber = 33;

// convert above number into string

let strSomeNumber = String(33);
console.log(typeof strSomeNumber);  //easily converted into string
console.log(strSomeNumber);