/* Let's try to connvert all type of primitive datatype which is in js into string
___________________________________________________________________________________
Number, undefined, null, boolean, symbol, Nan, string*/

let score = 23;
let scoreString = String(score);
console.log(typeof scoreString);
console.log(scoreString);  //easily convertible


let x = undefined;
console.log(x);
console.log(typeof x);
let undeString = String(undefined);   //Here undefined is a simple string not any data type
console.log(typeof undeString);
console.log(undeString);
// Check undefined before conversion and after conversion are same or not.
if (x === undeString) {
    console.log("both are same");
} else {
    console.log("both are different");
}
// === equals use to check value as well as data type is same or not if both same then it return true other wise it returns false


let y = null;
console.log(y);
console.log(typeof y);  //type of null is always object
let yStr = String(y);
console.log(typeof yStr); //converted into string and now null behaves as simple string
console.log(yStr);
// Check null before conversion and after conversion are same or not.
if (x === yStr) {
    console.log("both are same");
} else {
    console.log("both are different");
}

let z = true;
console.log(z);
console.log(typeof z);
let xStr = String(z);
console.log(xStr);  //Now converted into string and it behaves as normal string.
// Check true before conversion and after conversion are same or not.
if (x === xStr) {
    console.log("both are same");
} else {
    console.log("both are not same");
}

let u = false;
console.log(u);
console.log(typeof u);
let uStr = String(u);
console.log(typeof uStr);  //converted into string and it behaves as normal string
console.log(uStr);
// Check false before conversion and after conversion are same or not.
if (u === uStr) {
    console.log("both are same");
} else {
    console.log("both are not same");
}


let k = NaN;
console.log(k);
console.log(typeof k);
let kStr = String(k);
console.log(typeof kStr);
console.log(kStr);  //converted into string NaN behaves as simple string
// Check NaN before conversion and after conversion are same or not.
if (k === kStr) {
    console.log("both are same");
} else {
    console.log("both are not same");
}



/* Let's try to connvert all type of primitive datatype which is in js into number
___________________________________________________________________________________
Number, undefined, null, boolean, symbol, Nan, string*/

let str = "Rajnish";
console.log(typeof str);
let strnum = Number(str);
console.log(typeof strnum);  //converted into number but actual value of the variable is not a number(NaN).
console.log(strnum);

let x1 = undefined;
console.log(typeof x1);
let x1num = Number(x1);
console.log(typeof x1num);  //converted into number but actual value of the variable is not a number(NaN).
console.log(x1num);

let x2 = NaN;
console.log(typeof x2);
let x2num = Number(x2);
console.log(typeof x2num);   //converted into num but the value of the varibale is not a number(NaN).
console.log(x2num);

let x3 = null;
console.log(typeof x3);
let x3num = Number(x3);
console.log(typeof x3num);  //converted into number but the value of the variable is 0.
console.log(x3num);

let x4 = true;
console.log(typeof x4);
let x4num = Number(x4);
console.log(typeof x4num);  //converted into number but the value of the variable is 1.
console.log(x4num);

let x5 = false;
console.log(typeof x5);
let x5num = Number(x5);
console.log(typeof x5);    //converted into number but the value of  the variable is 0.
console.log(x5num);


/* Let's try to connvert all type of primitive datatype which is in js into boolean
___________________________________________________________________________________
Number, undefined, null, boolean, symbol, Nan, string*/

let x6 = 5;
let x6Bool = Boolean(x6);
console.log(typeof x6Bool);  //converted into boolean but the value is true
console.log(x6Bool);

let x7 = 0;
let x7Bool = Boolean(x7);
console.log(typeof x7Bool);  //converted into boolean but the value is false
console.log(x7Bool);

let x8 = "Rajnish";
let x8Bool = Boolean(x8);
console.log(typeof x8Bool);   //converted into boolean but the value is true
console.log(x8Bool);

let x9 = "";
let x9Bool = Boolean(x9);
console.log(typeof x9Bool);   //converted into boolean but the value is false
console.log(x9Bool);

let x10 = undefined;
console.log(typeof x10);
let x10Bool = Boolean(x10);
console.log(typeof x10Bool);   //converted into boolean but the value is false
console.log(x10Bool);

let x11 = null;
console.log(typeof x11);
let x11Bool = Boolean(x11);
console.log(typeof x11Bool);   //converted into boolean but the value is false
console.log(x11Bool);


let x12 = NaN;
console.log(typeof x12);
let x12Bool = Boolean(x12);
console.log(typeof x12Bool);   //converted into boolean but the value is false
console.log(x12Bool);

/* Note----->>>In JavaScript, NaN is short for "Not-a-Number". In JavaScript, NaN is a number that is not a legal number. 
               The Global NaN property is the same as the Number. Nan property.*/