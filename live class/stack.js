let data = [];
let top = -1;

function push(el) {
  top++;
  data[top] = el;
  console.log("element added");
}

function pop() {
  if (top === -1) {
    console.log("Stack is empty");
  }
  data.splice(top, 1);
  top--;
  console.log("element remove");
}

class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push = (el) => {
    this.top++;
    this.data[this.top] = el;
    console.log(`${el} Element added in ${this.top}`);
  };

  peek = () => {
    if (this.top > -1) {
      console.log(`Top Value ${this.data[this.top]}`);
    }
  };

  printStack = () => {
    let i = this.top;
    while (i > -1) {
      console.log(`Element at ${i} is ${this.data[i]}`);
      i--;
    }
  };

  pop = () => {
    if (this.top === -1) {
      return;
    }
    console.log(`Element removed from ${this.top}`);
    this.data.splice(this.top, 1);
    this.top--;
  };
}

const stack = new Stack();

stack.push(29);
stack.push(39);
stack.push(49);
stack.push(59);
stack.push(69);
stack.pop();
stack.peek();
stack.printStack();
console.log(stack.data);
