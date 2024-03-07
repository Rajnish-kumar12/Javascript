const accountId = 1;
let accountEmail = "rajnish@gmail.com";
var accountPassword = "sfdfs";
accountCity = "Jaipur";

// accountId = 2;    Not allowed beacuse when we use const key word it is constant and constant never change the value.

accountEmail = "rajnishnew@gmail.com";
accountPassword = "dsad";
accountCity = "Patna";
console.table([accountId, accountEmail, accountPassword, accountCity]);

/* Note: Prefer not to use var because issue of functional scope and block scope.
without keyword also dont use variable it is not good practise in javaascript.
so use let and const. */

// console.log(x);   it gives not defined beacuse x variable is not defined.

let one;
console.log(one);  //It gives undefined

var two;
console.log(two);  // it gives undefined

const three;
console.log(three);  //It gives error


/* *points to remember
---------------------------- */

/*  var variable can reassign the value and change the value as well.
              1)  var x=10;
                var x=5; we can do this 
              
              2) var x=10;
                     x=4; we can also do this 
*/

/*
    let can change the value of varibale but not reassign on reassign it shows error.
               1)  var x=10;
                var x=5; we can't do this 
              
              2) var x=10;
                     x=4; we can also do this 
*/


/*
    cont never reassign never change the value of variable.
*/


