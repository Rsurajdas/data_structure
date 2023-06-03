class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor(head) {
    this.head = head;
  }
}

let node1 = new Node(5);
let node2 = new Node(10);
let node3 = new Node(15);
let node4 = new Node(20);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let linkedList = new List(node1);
console.log(linkedList.head.data);
console.log(linkedList.head.next.data);

let start = linkedList.head;

while (start !== null) {
  console.log(start.data);
  start = start.next;
}
console.log(2 % 1);
