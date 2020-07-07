var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //create a variable to store boolean result  which will return later
  var result = false;
  //recursion to check each children
  var checkChild = function (node) {
    //check for the passed in node if it have any children
    if(node.children.length === 0){
      //if no children check value to target
      if (node.value === target) {
        //change result to true if match target
        result = true;
      }
    }
    //if children.length is more than 1
    if (node.children.length > 0) {
      //iterate children
      for (var i = 0; i < node.children.length; i++) {
        //call recursion function again on children[i]
        checkChild(node.children[i]);
      }
    }
  };
  checkChild(this);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */














