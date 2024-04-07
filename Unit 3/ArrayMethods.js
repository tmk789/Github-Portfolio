//blank array
let arrayValues = [];

//function to update the paragraph element
function update(){
    const output = document.getElementById("output");
    output.innerHTML = "";
    //for each to get value from array and display
    arrayValues.forEach((item, index) => {
        output.innerHTML += `${index + 1}. ${item}<br>`;
    });
    
    
}

//push item onto the array
function push() {
    const getInput = document.getElementById("input").value;
    arrayValues.push(getInput);
    
    update();
}

//remove item from array and update
function pop(){
    arrayValues.pop();
    
    update();
}

//add item to array and update
function unshift(){
    const getInput = document.getElementById("input").value;
    arrayValues.unshift(getInput);
    
    update();
}

//remove item from array and update
function shift(){
    arrayValues.shift();
    
    update();
}

//array map adding input to every element and updating
function arrMap(){
    const getInput = document.getElementById("input").value;
    
    arrayValues = arrayValues.map(item => getInput + item);
    
    update();
}
