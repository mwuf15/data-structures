var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.countFirst = 0;
  this.countLast = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.countLast] = value;
  this.countLast ++;
};

Queue.prototype.dequeue = function () {
  var newValue = this.storage[this.countFirst];
  delete this.storage[this.countFirst];
  this.countFirst++;
  return newValue;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length
};
