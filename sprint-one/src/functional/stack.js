var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};//{1:a, 2:b, 3:c...}

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    if (count > 0) {
      //count is one ahead, so we need to minus one to point at the correct value to delete
      count--;
      var newValue = storage[count];
      delete storage[count];
      return newValue;
    }

  };

  someInstance.size = function() {

    return Object.keys(storage).length
    // return count
    // console.log(storage)
  };

  return someInstance;
};
// Stack()