//leaf class
class leaf {
    //constructir taking value and setting left and right
    //to null
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//head
const myLeaf = new leaf(242);
myLeaf.left = new leaf(5464);
myLeaf.right = new leaf(1234);
myLeaf.left.left = new leaf(3251);
myLeaf.left.right = new leaf(3521);
myLeaf.right.left = new leaf(1278);
myLeaf.right.right = new leaf(23);
myLeaf.left.left.left = new leaf(1);
myLeaf.left.left.right = new leaf(2);
myLeaf.left.right.left = new leaf(5464);
myLeaf.left.right.right = new leaf(53);

//arrays for storing
const breadth = [];
const depth = [];

//function search taking tree and array
function depthFirstSearch(tree, depthArray){
    if (tree == null)
        return;
        //adding to array
    depthArray.push(tree.value);
    //recursion
    depthFirstSearch(tree.left, depthArray);
    depthFirstSearch(tree.right, depthArray);
}

//function seach taking tree and array
function breadthFirstSearch(tree, breadthArray){
    let treeArray = [tree];
    //array is greater than 0
    while (treeArray.length > 0)
    {
        //storing treearray on current node
        let currentNode = treeArray.shift();
        //adding to array
        breadthArray.push(currentNode.value);
        //node on the tree add to array
        if(currentNode.left) treeArray.push(currentNode.left);
        if (currentNode.right) treeArray.push(currentNode.right);
        
    }
}

//calling the function giving it the leaf and the array to store in
depthFirstSearch(myLeaf, depth);
//display
document.getElementById('depth').innerText = "Depth Results: " + depth.join(', ');
//calling the function giving it the leaf and the array to store in
breadthFirstSearch(myLeaf, breadth);
//display
document.getElementById('breadth').innerText = "Breadth Results: " + breadth.join(', ');
