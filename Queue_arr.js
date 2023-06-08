class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.queue[this.rear] = val;
    this.rear++;
  }

  dequeue() {
    if (this.queue.length > 0) {
      let headVal = this.queue[this.head];
      //   if using splice method, don't increase head value
      // if using delete keyword, increase head value by 1
      this.queue.splice(this.head, 1);
      //   this.head++;
      return headVal;
    } else {
      console.log("Queue is empty");
    }
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.queue.length > 0) {
      return this.queue[this.head];
    } else {
      console.log("Queue is empty");
    }
  }

  size() {
    return this.queue.length;
  }

  print() {
    console.log(this.queue);
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
