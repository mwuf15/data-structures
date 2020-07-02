var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.countFirst = 0;
  someInstance.countLast = 0;

  return someInstance;
};

var queueMethods = {

enqueue: function(value) {
  this.storage[this.countLast] = value;
  this.countLast ++;
},

dequeue: function() {
  var newValue = this.storage[this.countFirst];
  delete this.storage[this.countFirst];
  this.countFirst++;
  return newValue;
},

size: function() {
  return Object.keys(this.storage).length;
}


};


