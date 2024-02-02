"use strict"

/*
    Author: Taylor Kubik   
    Date 2/2/2024
    Desc: uses a for loop to add the p element to the page 5 times with text and 
    then append it to the div container then create a button and add it to the page and add a event listener to 
    when cliked change color

*/

// get the element id of div
const newDiv = document.getElementById("div");
// get the body element store in newbutton
const newBody = document.getElementById("body");

//for loop 
for (let i = 0; i < 5; i++){
    //create element p
    var element = document.createElement('p');
    //create a text node and apply text
    var text = document.createTextNode('this is it');
    //append element p to the text node
    element.appendChild(text);
    //append the p element to div container
    newDiv.appendChild(element);


};



//create a button
var button = document.createElement("button");
//create text node
var buttonText = document.createTextNode("Click me");
//append the text to the button
button.appendChild(buttonText);
//append button to the body element
newBody.appendChild(button);

//select the button and add a click event and assign it to run newfunction
document.querySelector("button").addEventListener("click", newfunction);



function newfunction(){
    //use newbody to style background color to black
    newBody.style.backgroundColor = "black";
    //use new div to style background color to green
    newDiv.style.backgroundColor = "green";


}







