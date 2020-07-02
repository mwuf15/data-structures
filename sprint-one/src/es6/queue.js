class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.countFirst = 0;
    this.countLast = 0;
  }

  enqueue (value) {
    this.storage[this.countLast] = value;
    this.countLast ++;
  }

  dequeue () {
    var newValue = this.storage[this.countFirst];
    delete this.storage[this.countFirst];
    this.countFirst++;
    return newValue;
  }

  size () {
    return Object.keys(this.storage).length
  }
}
