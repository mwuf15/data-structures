

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      this.nodes.splice (i, 1);
    }
  }
  for (var j = 0; j < this.edges.length; j++) {
    for (var k = 0; this.edges[j].length; k++) {
      if (this.edges[j][k] === node) {
        this.edges.splice(j,1);
        j--;
        break;
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i ++) {
    for (var j = 0; j < this.edges[i].length; j++) {
      if ((this.edges[i][j] === fromNode && this.edges[i][j+1] === toNode) || (this.edges[i][j] === toNode && this.edges[i][j+1] === fromNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges.push([fromNode,toNode]);
    this.edges.push([toNode,fromNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    for (var j = 0; j < this.edges[i].length; j++) {
      if ((this.edges[i][j] === fromNode && this.edges[i][j+1] === toNode) || (this.edges[i][j] === toNode && this.edges[i][j+1] === fromNode)){
        this.edges.splice(i, 1);
        i--;
        break;
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( var i = 0; i < this.nodes.length; i ++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


