// Define a class
class myClass {
    constructor(radius) {
        this.radius = radius;
    }

    // Method to calculate the area of the circle
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

//get ids of elements on page
let calculate = document.getElementById("calculateButton");
let getTextBox = document.getElementById("textBox");
let getResult = document.getElementById("result");

//on load
getTextBox.focus();

//event listener with an anonymous function
calculate.addEventListener("click", function(){

//parse input
let input = parseFloat(getTextBox.value);

// Create an instance of myClass given input as a parameter
let myClassOne = new myClass(input);

// Call the calculateArea method of the myClassO object
let area = myClassOne.calculateArea();

//display on webpage
getResult.textContent = 'The Area of a circle with Radius of ' + input + " is " + area.toFixed(2);

//giving the text box focus
getTextBox.focus();

});




