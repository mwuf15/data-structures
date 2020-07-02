class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count ++;
  }
  pop() {
    if (this.count > 0) {
      this.count--;
      var newValue = this.storage[this.count];
      delete this.storage[this.count];
      return newValue;
    }
  }
  size() {
    return Object.keys(this.storage).length
  }
}