"use strict"

/*
Author: Taylor Kubik    
Date 1/23/2024


*/

const newArray = ["i", "am", "an", "array"];


for(let i in newArray)
{
    let num = newFunction(i);
    
    
    twoParameters(num, i);

}

function newFunction(parameter1)
{

    parameter1++;
    
    console.log(parameter1);

    return parameter1;

}

function twoParameters(param1, param2)
{
    
    if (param1 === 0) {
        param2 = param1;

    }

    else if (param1 % 2 === 0) {
        param2 = param1;
    }

    else {
        console.log(param1 + " is odd");
    }
    
    return param1, param2;
    
}





