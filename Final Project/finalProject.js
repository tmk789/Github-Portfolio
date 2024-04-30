/*
Author:Taylor Kubik
Date: 4/30/2024
Desc this is just a add name to a linked list and then if you want to remove it then you can



*/
// class NameLinkedList
class NameLinkedList {
    constructor() {
        this.head = null;
    }
    //add name method taking name as a parameter
    addName(name) 
    {
        //making name on my linked list
        const newNode = new Node(name);
        //making head
        if (!this.head) {
            this.head = newNode;
        } else {
        //adding after head
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    
    removeName(name) {
    // If the list is empty, nothing to remove
        if (!this.head) {
            return;
        }
        // If the first node contains the name to remove, move the head to the next node
        if (this.head.data === name) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        
        // Link the previous node to the next node, skipping the current node
        while (current) {
            if (current.data === name) {
                prev.next = current.next; 
                return;
            }
            prev = current;
            current = current.next;
        }
    }
}

//nodes for my linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

    //getting the button and adding a click event with an anonymous function
    document.getElementById('addName').addEventListener('click', function ()  {
        // getting the textBox ID
        const addNameTextBox = document.getElementById('textBox');
        //getting the value and if it has any whitespace
        const addText = addNameTextBox.value.trim();
        //adding if not empty
        if (addText !== '') {
            NEWNAMELIST.addName(addText);
            //update page
            NameToPage();
        }
    });
    
    //getting the button and adding a click event with an arrow function
    document.getElementById('removeName').addEventListener('click', () => {
        //getting texbox ID
        const removeNameInput = document.getElementById('textBox');
        //storing the input value and removing any whitespace
        const nameToRemove = removeNameInput.value.trim();
        //not empty remove it
        if (nameToRemove !== '') {
            NEWNAMELIST.removeName(nameToRemove);
            //update page
            NameToPage(); 
        }
    });

    
    // Function to put names on the page
    function NameToPage() {
        //getting the paragrapg
        let nameList = document.getElementById('nameList');
        //setting the txt to empty
        nameList.innerHTML = '';
        //getting the head
        let current = NEWNAMELIST.head;
        //while at the head create a paragraph element
        while (current) {
            const nameP = document.createElement('p');
            //getting the linkedlist data
            nameP.textContent = current.data;
            //adding the text content to the created element
            nameList.appendChild(nameP);
            //continue
            current = current.next;
        }
    }
    //create a new instance
    const NEWNAMELIST = new NameLinkedList();