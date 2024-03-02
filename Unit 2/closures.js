//new function given the name, hp and a rest parameter of moves
function newFunc(name, hp, ...moves){
    //private
    let nameVar = name;
    let hpVar = hp;
    let movesVar = moves;
    
    return {
        //method returning nameVar
        nameOne(){
            return nameVar;
        },
        //method returning hpVar
        hpOne() {
            return hpVar;
        },
        //method
        movesOne(){
            //store moves
            let movesTwo = "";
            //for of looping through rest param
            for(const newMoves of moves) {
                //selecting the class of .moves div
                const findMoves = document.querySelector(".moves");
                //newMoves being added to movesTwo
                movesTwo += newMoves;
                //create element paragraph
                const createP = document.createElement("p");
                //create text node movesTwo
                const createText = document.createTextNode(movesTwo);
                //append
                createP.appendChild(createText);
                findMoves.appendChild(createP);
                
                
                
            }
            //return movesTwo
            return movesTwo;
        }
    }
}

//const = to newFunc given name and hp and atleast 3 moves name
const newAdd = newFunc("Taylor", 5, "Move1 ", "Move2 ", "Move3");
//newAddTwo = to newAdd 
const newAddTwo = newAdd;
// logging the hp method
console.log(newAddTwo.hpOne());
//logging the nameOne method
console.log(newAddTwo.nameOne());
//calling the movesOne method to append to page
newAddTwo.movesOne();






