var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var countFirst = 0;
  var countLast = 0;
  someInstance.enqueue = function(value) {
    storage[countLast] = value;
    countLast ++;
  };

  someInstance.dequeue = function() {

    var newValue = storage[countFirst];
    delete storage[countFirst];
    countFirst ++;
    return newValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
