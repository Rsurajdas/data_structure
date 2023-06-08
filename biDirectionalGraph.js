class Graph {
  constructor() {
    this.adjList = new Map();
  }

  //   node is a key
  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      let current = this.adjList.get(node);
      current.add({ adj, weight });
      this.adjList.set(node, current);
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
    }
  }

  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);
    // bi- directional graph
    if (adj !== node) {
      this.addEdgeHelper(adj, node, weight);
    }
  }

  getNode(node) {
    return this.adjList.get(node);
  }

  getAllNodes() {
    return Array.from(this.adjList.keys());
  }

  print() {
    console.log(this.adjList);
  }
}

function degree(g) {
  var nodes = g.getAllNodes();
  var degrees = new Map();

  for (var i = 0; i < nodes.length; i++) {
    var adj = g.adjList.get(nodes[i]);

    console.log(nodes[i], adj);
    for (const [key, value] of adj.entries()) {
      if (degrees.has(key.adj)) {
        degrees.set(key.adj, degrees.get(key.adj) + 1);
      } else {
        degrees.set(key.adj, 1);
      }
    }
  }
  console.log(degrees);
}
