class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val, null);
    if (this.size === 0) {
      this.head = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      console.log("Queue is Empty");
    } else {
      let headVal = this.head.value;
      this.head = this.head.next;
      this.size--;
      return headVal;
    }
  }

  print() {
    let holder = this.head;
    while (holder !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  length() {
    return this.size;
  }

  peek() {
    if (this.size > 0) {
      return this.head.value;
    } else {
      console.log("Queue is Empty");
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue);
