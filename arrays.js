"use strict"

/*
Author: Taylor Kubik    
Date 1/23/2024


*/

const newArray = ["i", "am", "an", "array"];




const newFunction = function (parameter1){
    parameter1++;
    
    console.log(parameter1);
    
    return parameter1;

    
}





function newnum(param1, param2)
{
    if (param2 === 0){
        return newFunction(param2);
    }
    
    else if (param2 % 2 === 0) {
        return newFunction(param2);

    }

    else {
        console.log(param2 + " is odd");
    }
    
    
}

///kkkkk

for (let num in newArray){
    newnum(newFunction, num);
    
}





