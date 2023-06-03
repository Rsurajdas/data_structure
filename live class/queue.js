let head = 0;
let tail = 0;
let data = [];

function enqueue(el) {
  data[tail] = el;
  console.log(`${el} is added at queue at ${tail}`);
  tail++;
}

function dequeue() {
  if (head === tail) {
    console.log("Queue is empty");
    return;
  }
  console.log(`${data[head]} is remove from queue from position ${head}`);
  head++;
}

class Queue {
  constructor() {
    this.data = [];
    this.tail = 0;
    this.head = 0;
  }

  enqueue = (el) => {
    this.data[this.tail] = el;
    console.log(`${el} is added at queue at ${this.tail}`);
    this.tail++;
  };

  peek = () => {
    if (this.head !== this.tail) {
      console.log(`Element at head position is ${this.data[this.head]}`);
    }
  };

  printQueue = () => {
    let start = this.head;
    let end = this.tail;

    while (start < end) {
      console.log(`Element at queue ${this.data[start]}`);
      start++;
    }
  };

  dequeue = () => {
    if (this.head === this.tail) {
      console.log("Queue is empty");
      this.data = [];
      this.tail = 0;
      this.head = 0;
    }
    console.log(
      `${this.data[this.head]} is remove from queue from position ${this.head}`
    );
    // this.data.splice(this.head, 1);
    this.head++;
  };
}

const queue = new Queue();
queue.enqueue(19);
queue.enqueue(29);
queue.enqueue(39);
queue.enqueue(49);

queue.dequeue();
queue.peek();
queue.printQueue();
queue.enqueue(59);
// console.log(queue.data);
