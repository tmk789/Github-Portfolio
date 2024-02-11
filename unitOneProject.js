"use strict"

/*
Author: Taylor Kubik
Date 2/11/2024
*/

//get the generate id
var generateButtonId = document.getElementById("generate");

//create a textnode generate
var generateText = document.createTextNode("Generate");

//append the text to the button
generateButtonId.appendChild(generateText);

  //generate a customized multiplication table
  const MultiplicationTable = () => {
    //get the id of the input
    const multiplierInput = document.getElementById('multiplier');
    // parse the value enetered 
    const multiplier = parseInt(multiplierInput.value);
    //get the table
    const tableBody = document.getElementById('multiplication-table');
    //clear the previous table
    tableBody.innerHTML = '';

    // Generate table headers
    const headerRow = document.querySelector('thead tr');
    //reset the header row
    headerRow.innerHTML = '<th>&times;</th>'; 
    for (let i = 1; i <= 10; i++) {
      //create element tablehead
      const headerCell = document.createElement('th');
      //put i times multiplier in textcont
      headerCell.textContent = i + " x " + multiplier;
      //append to header row
      headerRow.appendChild(headerCell);
    }

    // Generate multiplication table using nested loops
    for (let i = 1; i <= 10; i++) {
      //create the table row element
      const row = document.createElement('tr');
      //create table header
      const firstCell = document.createElement('th');
      //add i to the text content
      firstCell.textContent = i;
      //append
      row.appendChild(firstCell);

      for (let j = 1; j <= 10; j++) {
        //create the data cell
        const cell = document.createElement('td');
        //i * j * multiplier in the data cell
        cell.textContent = i * j * multiplier;
        //append cell to row
        row.appendChild(cell);
      }
      //append the row to the table body
      tableBody.appendChild(row);
    }
  };
  
  //get generate
  const generateButton = document.getElementById('generate');
  //add a click event to the button and run function
  generateButton.addEventListener('click', MultiplicationTable);
  
    // Event listener for input field to regenerate the table dynamically
    const multiplierInput = document.getElementById('multiplier');
    multiplierInput.addEventListener('input', () => {
      MultiplicationTable();
    });
