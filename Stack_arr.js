class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      console.log("Stack is Empty");
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  print() {
    console.log(this.stack);
  }

  size() {
    return this.top;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(val) {
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(val);
    this.s1.print();
    while (!this.s2.isEmpty()) {
      this.s1.push(this.s2.pop());
    }
    this.s1.print();
  }

  dequeue() {
    return this.s1.pop();
  }

  print() {
    console.log(this.s1);
  }
}

let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
// q.print();
