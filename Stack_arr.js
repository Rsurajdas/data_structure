class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(value) {
    this.stack[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.stack.length > 0) {
      this.top--;
      return this.stack.splice(this.top, 1);
    }
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.top - 1];
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
stack.push(30);
console.log(stack.pop(), "pop");
stack.push(40);
console.log(stack.peek(), "peek");
console.log(stack.isEmpty(), "isEmpty");
console.log(stack.pop(), "pop");
console.log(stack.size(), "size");
stack.print();
