var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    // if list.head is null
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
      return;
    }
    list.tail.next = newNode;
    list.tail = newNode;

  };

  list.removeHead = function() {
    var previousHead = list.head;
    list.head = list.head.next;
    return previousHead.value;
  };

  list.contains = function(target) {
    // console.log(list)
    //new variable name currentNode = list.head
    var currentNode = list.head;
    //while list.head.next not equal to null
    while (currentNode.next != null) {
      //check if currentNode.value = target
      // console.log(currentNode.next)
      if (currentNode.value === target || list.tail.value === target) {
        //return true
        return true;
      } else {
        //else currentNode = currentNode.next
        currentNode = currentNode.next;
      }
    }
    //return false(outside of loop)
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail : O(1);
 removeHead : O(1);
 contains : O(n);
 */
