var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};

var binaryTreeMethods = {

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if ( value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },

  contains(value) {

    if (value === this.value) {
      return true;
    }
    if (value < this.value && this.left != null) {
      return this.left.contains(value);
    }
    if (value > this.value && this.right != null) {
      return this.right.contains(value);

    }
    return false;
  },

  depthFirstLog(cb) {
    cb (this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
      // console.log(this.left)
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 O(log n)
 */
