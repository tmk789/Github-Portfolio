"use strict"
/* 
Author: Taylor Kubik
Date: 1/17/2024

*/

let number = 230;
let number1 = number * 134;
var req = prompt("Please enter something");



console.log("This is what you entered: " + req + " and is stored in req");

console.log("this is the number: " + number1 + " and is stored in number1");

let newnumber1 = 456;

for(var i = 1; i <= 5; i++){
    newfunction(newnumber1);
    newnumber1++;
}


function newfunction(parameter1)
    {
        if (parameter1 === 0) {
            console.log(parameter1 + " is even");

        }
        
        else if (parameter1 % 2 === 0) {
            console.log(parameter1 + " is even");
        }

        else {
            console.log(parameter1 + " is odd");
        }
        return parameter1;
    }
    



