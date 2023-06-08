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

var pq = new PriorityQueue();
pq.enqueue(1, 10);
pq.enqueue(2, 5);
pq.enqueue(3, 0);
pq.enqueue(4, 20);
pq.enqueue(5, 2);
pq.enqueue(6, 27);
pq.print();
