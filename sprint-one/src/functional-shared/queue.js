var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.countFirst = 0;
  someInstance.countLast = 0;
  _.extend(someInstance,queueMethods)
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.countLast] = value;
  this.countLast ++;
};

queueMethods.dequeue = function () {
  var toDequeue = this.storage[this.countFirst];
  delete this.storage[this.countFirst];
  this.countFirst++;
  return toDequeue;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
