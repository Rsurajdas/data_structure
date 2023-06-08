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

class GraphNode {
  constructor(element, weight) {
    this.element = element;
    this.weight = weight;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, weight) {
    let graphNode = new GraphNode(element, weight);
    let i = 0;
    let contains = false;

    while (i < this.items.length && !contains) {
      if (this.items[i].weight > graphNode.weight) {
        this.items.splice(i, 0, graphNode);
        contains = true;
      }
      i++;
    }

    if (!contains) {
      this.items.push(graphNode);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  print() {
    console.log(this.items);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// g = graph
// dijkstra algorithm is used to fine shortest path between nodes
function dijkstra(g, source) {
  let distances = {};
  let prev = {};
  let pq = new PriorityQueue();

  distances[source] = 0;
  pq.enqueue(source, 0);

  var allNodes = g.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i] != source) {
      distances[allNodes[i]] = Infinity;
    }
    prev[allNodes[i]] = null;
  }

  while (!pq.isEmpty()) {
    let minNode = pq.dequeue();
    let currNode = minNode.name;

    let adjList = g.getEdges(minNode.name);

    for (const [key, value] of adjList.entries()) {
      let alt = distances[currNode] + key.weight;

      if (alt < distances[key.adj]) {
        distances[key.adj] = alt;
        prev[key.adj] = currNode;

        pq.enqueue(key.adj, distances[key.adj]);
      }
    }
  }
  console.log(distances);
}
