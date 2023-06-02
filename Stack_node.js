class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val, this.top);
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.size > 0) {
      const topVal = this.top.val;
      this.top = this.top.next;
      this.size--;
      return topVal;
    } else {
      console.log("Stack is Empty");
    }
  }

  peek() {
    if (this.size > 0) {
      return this.top.val;
    } else {
      console.log("Stack is Empty");
    }
  }

  print() {
    let holder = this.top;
    while (holder.next !== null) {
      console.log(holder.val);
      holder = holder.next;
    }
  }

  length() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
// stack.print();

let undoStack = new Stack();
let redoStack = new Stack();

function incrementCounter() {
  undoStack.push(counter);
  counter++;
  document.getElementById("val").value = counter;
}

function undo() {
  redoStack.push(counter);
  counter = undoStack.pop();
  document.getElementById("val").value = counter;
}

function redo() {
  undoStack.push(counter);
  counter = redoStack.pop();
  document.getElementById("val").value = counter;
}

// Balance
let bracketStack = new Stack();
let str = "[(1+2)])";
let valid = true;
let i = 0;

// todo
while (i < str.length && valid) {
  let chr = str.charAt(i);
  if (chr === "(" || chr === "{" || chr === "[") {
    bracketStack.push(chr);
  } else if (chr === ")" || chr === "}" || chr === "]") {
    if (!bracketStack.isEmpty()) {
      bracketStack.pop();
    } else {
      valid = false;
    }
  }

  i++;
}

if (!bracketStack.isEmpty) {
  valid = false;
}

console.log(valid);
