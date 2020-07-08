

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log('storage', this._storage)

};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);

  var currentVal = this._storage.get(index) || [];

  for ( var i = 0; i < currentVal.length; i++) {
    if ( currentVal[i][0] === k) {
      var oldVal = currentVal[i][1];
      currentVal[i][1] = v;
      return oldVal;
    }
  }

  currentVal.push([k,v]);
  this._storage.set(index, currentVal);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentVal = this._storage.get(index);
  for ( var i = 0; i < currentVal.length; i++) {
    if (currentVal[i][0] === k) {
      return currentVal[i][1];
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var currentVal = this._storage.get(index) || [];
  for ( var i = 0; i < currentVal.length; i++) {
    if (currentVal[i][0] === k) {
      var removedVal = currentVal[i][1];
      currentVal[i].splice(i,1);
      return removedVal;
    }
  }
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 insertion: O(1);
 retrive : O(n);
 remove: O(n);
 */


