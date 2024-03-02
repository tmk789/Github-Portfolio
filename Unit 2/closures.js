//new function given the name, hp and a rest parameter of moves
function newFunc(name, hp, ...moves){
    //private vars
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
            //selecting the class .moves
            const findMoves = document.querySelector(".moves");
            //for of looping through rest param
            for(const newMoves of moves) {
                //create element paragraph
                const createP = document.createElement("p");
                //add newmoves to the paragraph
                createP.textContent = newMoves;
                //append
                findMoves.appendChild(createP);
            }
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






