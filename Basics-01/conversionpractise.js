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